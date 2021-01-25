<template>
  <div class="course-full-view">
    <nav>
      <img
        class="logo"
        @click="navToHome"
        src="../assets/images/Codic-logo.svg"
        alt=""
      />
      <div class="back" @click="navToCourses">
        <img src="../assets/images/small-arrow.svg" alt="" />
        <p>tillbaka</p>
      </div>
    </nav>
    <main>
      <section class="video-player">
        <div class="video">
          <iframe
            width="100%"
            height="100%"
            :src="currentVideoLink"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <!-- <section class="course-info">
          <h2>c# master class</h2>
          <p class="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            deserunt minus corrupti illum in? Vero numquam deleniti placeat
            delectus excepturi esse inventore natus reprehenderit quia? Natus
            exercitationem quos accusamus quod? Alias, doloremque dolores. Ipsum
            quisquam at qui eos quae dolores!
          </p>
          <article>
            <h3>duration</h3>
            <p>The duration of the course is 13 h and 16 m</p>
            <h3>features</h3>
            <p>Denna kursen är tillgängligt på mobil och webb</p>
            <h3>description</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </article>
        </section> -->
      </section>

      <section class="list">
        <playlist />
      </section>
    </main>

    <Footer />
  </div>
</template>

<script>
import Playlist from "../components/Course/Playlist.vue"
import Footer from "../components/Footer/Footer.vue"
export default {
  components: {
    Playlist,
    Footer,
  },
  computed: {
    currentVideoLink() {
      return this.$store.state.currentVideoLink
    },
  },
  methods: {
    navToCourses() {
      this.$router.push("/courses")
    },
    navToHome: function() {
      this.$router.push("/")
    },
  },
  created() {
    window.scrollTo(0, 0)
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/globalStyles.scss";
.course-full-view {
  width: 100vw;
  min-height: 100vh;
  @include flex();
  justify-content: space-between;
  background: #222;
  color: #eee;

  nav {
    background: #1e1e1e;
    width: 100%;
    padding: 1.4rem 3.4rem 1.4rem 6rem;
    @include flex();
    flex-direction: row;
    justify-content: space-between;
    color: #efefef;
    font-size: 0.8rem;

    div {
      @include flex();
      justify-content: space-around;
      flex-direction: row;
      width: 6rem;
      cursor: pointer;
    }

    img {
      cursor: pointer;
    }
  }

  main {
    position: relative;
    height: 90vh;
    width: 100%;
    @include flex();
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: row;

    .video-player {
      width: 65%;
      height: 100%;

      .video {
        width: 100%;
        height: 100%;
        background: #0f0f0f;
      }
    }

    .list {
      top: 0;
      right: 0;
      position: absolute;
      width: 35%;
      height: 100%;
    }
  }
}

// Mobile screen

@media only screen and (max-width: 1250px) {
  .course-full-view {
    nav {
      padding: 1.2rem 2rem;
      .logo {
        width: 3.5rem;
      }

      .back {
        width: 4.5rem;
        img {
          transform: scale(0.8);
        }
        p {
          font-size: 0.7rem;
          text-transform: uppercase;
        }
      }
    }
    main {
      height: initial;
      min-height: 100vh;
      flex-direction: column;

      .video-player {
        width: 100%;
        height: 44vh;
        padding: 1rem 0rem;
        .video {
          height: 100%;
        }
      }

      .list {
        width: 100%;
        position: initial;
        margin-top: 0.2rem;
      }
    }
  }
}
</style>
