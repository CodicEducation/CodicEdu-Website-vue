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
    errorMssg: "",
    courseSlected: "",
    playedVideos: [],
    CourseVideos: [],
    courses: [],
    currentVideoLink: "",
    imgUrl: "",
    teachers: [],
    liaStudents: [],
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
    reviews: [],
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
    getTeacher(state, teacher) {
      state.teachers.push(teacher)
    },
    getStudent(state, student) {
      state.liaStudents.push(student)
    },
    getReview(state, review) {
      state.reviews.push(review)
    },
    errorMssg(state, mssg) {
      state.errorMssg = mssg
    },
  },
  actions: {
    // Get Teachers from DB
    getTeachers(ctx) {
      console.log(ctx)
      firebase
        .firestore()
        .collection("teachers")
        .get()
        .then((snaps) =>
          snaps.docs.forEach((doc) => ctx.commit("getTeacher", doc.data()))
        )
    },

    // Get students from DB
    getStudents(ctx) {
      console.log(ctx)
      firebase
        .firestore()
        .collection("students")
        .get()
        .then((snaps) =>
          snaps.docs.forEach((doc) => ctx.commit("getStudent", doc.data()))
        )
    },

    // Get reviews from DB
    getReviews(ctx) {
      console.log(ctx)
      firebase
        .firestore()
        .collection("reviews")
        .get()
        .then((snaps) =>
          snaps.docs.forEach((doc) => ctx.commit("getReview", doc.data()))
        )
    },
    // Sign up a user

    signUser(ctx, user) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((cred) => {
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

          // send email link to user

          cred.user.sendEmailVerification()
        })
        .catch((error) => {
          ctx.commit("errorMssg", error.message)
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
        .catch((error) => ctx.commit("errorMssg", error.message))
    },

    // logout current user

    logout(ctx) {
      firebase
        .auth()
        .signOut()
        .then(() => {
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
    },
  },
  modules: {},
})
