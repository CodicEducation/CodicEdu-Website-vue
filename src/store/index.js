import Vue from "vue"
import Vuex from "vuex"
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uid: "",
    user: "",
    courseSlected: "",
    playedVideos: [],
    CourseVideos: [],
    courses: [],
    currentVideoLink: "",
    imgUrl: "",
    teachers: [
      {
        fullName: "Arasto Sahbaei",
        title: "JavaScript Fullstack",
      },
      {
        fullName: "Björn Bergqvist",
        title: ".NET",
      },
      {
        fullName: "Björn Strömberg",
        title: "C#",
      },
      {
        fullName: "Eva Hegnar",
        title: "data scientist",
      },
      {
        fullName: "Marcus Medina",
        title: "objektorienterad programmering",
      },
      {
        fullName: "Elias Jadidi",
        title: "Agila metoder",
      },
      {
        fullName: "Patrik Nygren",
        title: "Frontend ",
      },
      {
        fullName: "Sofia Zaid",
        title: "Assistent",
      },
      {
        fullName: "Benny Christensen",
        title: "Assistent",
      },
      {
        fullName: "Alexander Carlström",
        title: "Assistent",
      },
    ],
    contactPersons: [
      {
        fullName: "Henrik Enström",
        title: "Grundare & VD",
        email: "henrik.enstrom@codic.se",
        number: "+46-739-803-313",
      },
      {
        fullName: "Robin Kamo",
        title: "Affärsutvecklare & linjechef",
        email: "robin.kamo@codic.se",
        number: "+46-768-990-065",
      },
      {
        fullName: "Maria Bryl",
        title: "Utbildningsansvarig",
        email: "maria.bryl@codic.se",
        number: "+46-730-436-480",
      },
      {
        fullName: "Arash Sajjady",
        title: "Admin",
        email: "arash.sajjady@codic.se",
        number: "+46-730-682-808",
      },
    ],
    reviews: [
      {
        reviewer: "— Elev på .NET-utvecklare distans, Campus Mölndal",
        review:
          "“ Ville tacka för chansen att studera hos er! Jag var med på lektionen idag och har gått med ett stort leende hela dagen. Vilken underbart pedagogisk människa – den absolut bästa läraren jag någonsin träffat. Och allt är strukturerat. Det här kommer bli två riktigt bra år. Tusen tack! ”",
      },
      {
        reviewer: "— Samlad feedback C#-kurs, EC Utbildning",
        review:
          "“ Kursupplägget är tydligt och på en nivå som passar alla i klassen. Läraren är ödmjuk och flexibel i sin planering och sprider ut uppgifter och information under veckan, vilket har varit mycket uppskattat, så klassen känner att de hela tiden har saker att göra. ”",
      },
      {
        reviewer: "— Elev på C#-kurs, EC Utbildning",
        review:
          "“ Jag är nära att ge upp ett par gånger per vecka, men läraren lyckas hela tiden få mig att testa lite till och vilja våga. Jag har till och med tackat nej till två anställningar de senaste veckorna tack vare det. Tack för det. ”",
      },
      {
        reviewer: "— Elev på .NET-utvecklare distans, Campus Mölndal",
        review:
          "“ Tack för fantastiskt material, och en otroligt väl uppstyrd utbildning. Vår lärare är pedagogisk, otroligt hjälpsam och trevlig. Han skapar ett lugn hos mig, som ny elev. ”",
      },
    ],
  },
  mutations: {
    saveUid(state, uid) {
      state.uid = uid
    },
    resetUid(state) {
      state.uid = null
    },
    saveUser(state, user) {
      state.user = user
    },
    saveCourses(state, courses) {
      state.courses = courses
    },
    saveCourse(state, course) {
      state.courseSlected = course
    },
    saveCourseVids(state, vids) {
      state.CourseVideos = vids
    },
    saveLink(state, link) {
      state.currentVideoLink = link
    },
    saveVideosWatched(state, vids) {
      state.playedVideos = vids
    },
    saveUrl(state, url) {
      state.url = url
    },
  },
  actions: {
    // Sign up a user

    signUser(ctx, user) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((cred) => {
          console.log(cred.user.uid)
          ctx.commit("saveUid", cred.user.uid)

          // save user in db

          firebase
            .firestore()
            .collection("users")
            .doc(cred.user.uid)
            .set({
              name: user.name,
              email: user.email,
              videosWatched: [],
            })
        })
    },

    // login authentication function

    login(ctx, user) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((cred) => {
          ctx.commit("saveUid", cred.user.uid)
        })
    },

    // logout current user

    logout(ctx) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("Current user has been logged out")
          ctx.commit("resetUid")
        })
    },

    // Save uid from main.js

    saveUid(ctx, uid) {
      ctx.commit("saveUid", uid)
    },

    // Get user info from database

    getUser(ctx, uid) {
      firebase
        .firestore()
        .collection("users")
        .doc(uid)
        .get()
        .then((doc) => {
          ctx.commit("saveUser", doc.data())
        })
    },

    // =========== COURSE Section =========== //

    // Get all courses
    getCourses(ctx) {
      let courses = []
      firebase
        .firestore()
        .collection("courses")
        .get()
        .then((snaps) => {
          snaps.docs.forEach((doc) => {
            courses.push(doc.data())
          })
        })

      ctx.commit("saveCourses", courses)
    },

    // Save Selected Course
    saveSelectedCourse(ctx, course) {
      localStorage.setItem("courseSelected", JSON.stringify(course))
      ctx.commit("saveCourse", course)
    },

    // Get specific course

    getCourse(ctx, course) {
      let videos = []
      firebase
        .firestore()
        .collection(course)
        .get()
        .then((snaps) => {
          snaps.docs.forEach((doc) => videos.push(doc.data()))
        })
      ctx.commit("saveCourseVids", videos)
    },

    // =========== Save and Get User Video =============== //

    // Save played videos to users DB

    saveCurrentVid(ctx, link) {
      ctx.commit("saveLink", link)
    },

    saveVideoUser(ctx, item) {
      let vidArr = []
      firebase
        .firestore()
        .collection("users")
        .doc(item.uid)
        .get()
        .then((doc) => {
          vidArr = doc.data().videosWatched

          if (!vidArr.some((vid) => vid.vidName === item.vid.vidName)) {
            // Send new vid
            vidArr.push(item.vid)
            firebase
              .firestore()
              .collection("users")
              .doc(item.uid)
              .update({ videosWatched: vidArr })
          }
        })
    },

    // Get played videos from users DB

    getUserPlaylist(ctx, uid) {
      firebase
        .firestore()
        .collection("users")
        .doc(uid)
        .get()
        .then((doc) => {
          ctx.commit("saveVideosWatched", doc.data().videosWatched)
        })
    },

    // Play video from user playlist

    playUservid(ctx, link) {
      ctx.commit("saveLink", link)
    },

    // Get images

    async uploadImg(ctx, data) {
      const metadata = {
        contentType: data.file.type,
      }

      const fileRef = firebase
        .storage()
        .ref("users-images")
        .child(`${data.file.name}`)

      await fileRef.put(data.file, metadata)
      await fileRef.getDownloadURL().then((url) => {
        console.log("URL: ", url, data.uid)
        ctx.commit("saveUrl", url)

        firebase
          .firestore()
          .collection("users")
          .doc(data.uid)
          .update({ imageUrl: url })
      })
      console.log(ctx)
    },

    // uploadImgToDb(ctx, data) {
    //   firebase
    //     .firestore()
    //     .collection("users")
    //     .doc(data.uid)
    //     .get()
    //     .then((doc) => console.log(doc))
    // },
  },
  modules: {},
})
