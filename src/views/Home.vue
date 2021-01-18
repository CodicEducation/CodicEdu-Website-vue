<template>
  <div class="home">
    <disk-nav />
    <mobile-navbar />
    <main>
      <section class="main-view">
        <blockquote>
          vi utbildar <span>Göteborg</span> inom IT och programmering
        </blockquote>
        <p class="meeting-p">
          Söker du kompetenta lärare till en yrkesutbildning, <br />
          kodstuga eller gästföreläsning i Göteborg? <br />
          <router-link to="/">Hur bokar jag ett möte</router-link>
        </p>
        <img class="laptop" src="../assets/images/laptop.svg" alt="" />
        <section class="buttons">
          <button @click="navToCourses" class="cta">våra kurser</button>
          <button @click="navToContact" class="ghost">kontakta oss</button>
        </section>
        <article class="scroll">
          <p>scrolla</p>
          <img src="../assets/images/scroll.svg" alt="" />
        </article>
      </section>

      <section class="courses-view">
        <article>
          <h3>populära kurser</h3>
          <p>här hittar du de mest populära kurser hos oss</p>
        </article>
        <div class="pop-courses">
          <pop-course
            title="C# master class"
            description="Lorem ipsum amet dolor sit amet consectetur adipisicing elit. "
          />
          <pop-course
            title="C# master class"
            description="Lorem ipsum amet dolor sit amet consectetur adipisicing elit. "
          />
          <pop-course
            title="C# master class"
            description="Lorem ipsum amet dolor sit amet consectetur adipisicing elit. "
          />
        </div>
        <p class="desc desktop-only">
          Hos <span>Codic</span> finner du ett gäng trevliga IT-konsulter
        </p>
        <p class="desc desktop-only">
          som är experterpå programmering. Backend, frontend, app- och
          webbutveckling
        </p>
        <p class="desc desktop-only">är några av våra specialistområden.</p>
        <p class="desc mobile-only">
          Hos <span>Codic</span> finner du ett gäng trevliga IT-konsulter som är
          experterpå programmering.
        </p>
        <p class="desc mobile-only">
          Backend, frontend, app- och webbutveckling
        </p>
        <p class="desc mobile-only">
          är några av våra specialistområden.
        </p>
        <button class="cta" @click="navToCourses">
          <p>alla kurser</p>
          <img src="../assets/images/arrow.svg" alt="" />
        </button>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import DiskNav from "../components/Navigation/DiskNavbar.vue"
import MobileNavbar from "../components/Navigation/MobileNavbar.vue"

import Footer from "../components/Footer/Footer.vue"
import PopCourse from "../components/Course/PopCourse.vue"

export default {
  name: "Home",
  components: {
    DiskNav,
    MobileNavbar,
    Footer,
    PopCourse,
  },
  computed: {
    user() {
      return this.$store.state.currentUser
    },
  },
  methods: {
    navToCourses: function() {
      this.$router.push("/courses")
    },
    navToContact: function() {
      this.$router.push("/contact")
    },
  },
}
</script>
<style lang="scss" scoped>
@import "../assets/styles/globalStyles.scss";
.home {
  position: relative;
  width: 100%;
  min-height: 100vh;
  @include flex();
  justify-content: space-between;
  background: #1f1f1f;

  main {
    width: 100%;
    min-height: 100vh;
    color: #eee;

    .main-view {
      height: 90vh;
      width: 100%;
      display: grid;
      padding: 2rem 6rem;
      text-align: left;
      grid-template-columns: repeat(6, 1fr);
      grid-template-rows: repeat(6, 1fr);
      grid-template-areas:
        ". . . . . ."
        "bq bq bq . bg bg"
        "p p p . bg bg"
        ". . . . bg bg"
        "btns btns btns  . . ."
        ". . scroll scroll . .";

      .laptop {
        grid-area: bg;
        transform: scale(1.15);
      }

      blockquote {
        grid-area: bq;
        font-size: 2.8rem;
        font-weight: bold;
        text-align: left;
        max-width: 21ch;
        line-height: 3.5rem;

        &::first-letter {
          text-transform: uppercase;
        }

        span {
          color: $main-color;
        }
      }

      p {
        grid-area: p;
        align-self: center;
        max-width: 56ch;
        line-height: 1.8rem;
        color: #aaa;

        a {
          color: #eee;
        }

        br {
          display: none;
        }
      }

      .buttons {
        grid-area: btns;

        button {
          padding: 1.15rem 4.5rem;
          margin-right: 2rem;

          @include btn();
        }

        .cta {
          &:hover {
            @include hover();
          }
        }
        .ghost {
          color: #eee;
          background: transparent;
          opacity: 0.5;

          &:hover {
            transform: translateY(0.2rem);
            opacity: 1;
          }
        }
      }

      .scroll {
        width: 100%;
        grid-area: scroll;
        margin: 0 auto;
        @include flex();
        justify-content: flex-end;
        z-index: 10;
        animation: scrollAnim 2s infinite ease-in-out;
        transform: translateY(2rem);

        p {
          font-size: 0.7rem;
        }

        img {
          width: 36px;
        }
      }
    }

    .courses-view {
      min-height: 100vh;
      background: #222;
      margin-top: -2rem;
      color: #f2f2f2;
      @include flex();
      justify-content: flex-start;
      padding: 12rem 8rem;
      background-image: url("../assets/images/langBg.svg");
      background-position: center;
      background-size: contain;

      article {
        align-self: flex-start;
        text-align: left;
        h3 {
          text-transform: uppercase;
          border-left: 3px solid #fffa;
          padding: 0rem 1rem;
        }
        p {
          margin: 01rem 0rem;
          color: #c2c2c2;
          border-left: 3px solid #fffa;
          padding: 0rem 1rem;
          padding-bottom: 1.5rem;
        }
      }

      .pop-courses {
        width: 90vw;
        @include flex();
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        margin: 8rem 0rem;
        padding: 0rem 2rem;
      }

      .desc {
        color: #eee;
        width: 80ch;
        font-size: 1.15rem;
        line-height: 2.4rem;
        span {
          color: $main-color;
          font-weight: bold;
        }
      }

      .cta {
        margin-top: 6rem;
        padding: 1rem 2.6rem;
        @include btn();
        display: flex;
        align-items: center;
        justify-content: space-around;
        min-width: 18rem;

        &:hover {
          transform: translateY(0.4rem);
        }
      }
    }
  }
}

@keyframes scrollAnim {
  0% {
    transform: translateY(2);
  }

  50% {
    transform: translateY(2.6rem);
  }

  100% {
    transform: translateY(2);
  }
}

//smaller screens

@media only screen and (max-width: 1420px) {
  .home {
    main {
      .main-view {
        blockquote {
          font-size: 2.2rem;
          align-self: flex-end;
        }

        .laptop {
          transform: scale(0.85);
          align-self: flex-start;
        }

        p {
          font-size: 0.8rem;
        }
        .buttons {
          button {
            padding: 0.8rem 2.6rem;
            margin-right: 0.8rem;
          }
        }
      }
    }
  }
}

// iPad screen

@media only screen and (max-width: 1030px) {
  .home {
    main {
      .main-view {
        height: 80vh;
        grid-template-areas:
          ". . . . . ."
          "bq bq bq bg bg bg"
          "p p p bg bg bg "
          "btns btns btns bg bg ."
          ". . .  . . ."
          ". . scroll scroll . .";

        blockquote {
          font-size: 1.8rem;
          align-self: flex-end;
          line-height: 2.6rem;
        }

        p {
          line-height: 1.4rem;
        }

        .laptop {
          width: 120%;
          align-self: center;
        }
        .buttons {
          align-self: flex-start;
          button {
            padding: 0.8rem 2.6rem;
            margin-right: initial;
          }
        }
      }

      .courses-view {
        padding: 12rem 6rem;

        .pop-courses {
          width: 100vw;
          @include flex();
          flex-direction: row;
          flex-wrap: wrap;

          margin: 8rem 0rem;
          padding: 0rem 6rem;
        }
      }
    }
  }
}

// iPad pro height

@media only screen and (min-height: 1366px) {
  .home {
    main {
      .main-view {
        height: 50vh;
        grid-template-areas:
          ". . . . . ."
          "bq bq bq bg bg bg"
          "p p p bg bg bg "
          "btns btns btns bg bg ."
          ". . .  . . ."
          ". . scroll scroll . .";
      }
    }
  }
}

// Mobile devices

@media only screen and (max-width: 768px) {
  .home {
    main {
      .main-view {
        height: initial;
        height: 100vh;
        padding: 2rem 2rem 4rem 2rem;
        @include flex();
        justify-content: flex-start;

        .laptop {
          width: initial;
          align-self: center;
          margin-left: 0rem;
          margin: 2.5rem 0rem;
          width: 96%;
        }

        blockquote {
          font-size: 1.4rem;
          align-self: initial;
          text-align: left;
          margin: 0.6rem 0rem;
          line-height: 1.8rem;
        }

        p {
          align-self: initial;
          line-height: 1.5rem;
          text-align: left;
          font-size: 0.82rem;
          max-width: 42ch;
          margin: 0.2rem 0rem;
          br {
            display: initial;
          }
        }

        .buttons {
          align-self: initial;
          button {
            font-size: 0.8rem;
            width: 100%;
            margin: 0.8rem 0rem;
          }
        }

        .scroll {
          display: none;
        }
      }

      .courses-view {
        padding: 8rem 2rem;
        article {
          h3 {
            font-size: 1rem;
          }

          p {
            font-size: 0.8rem;
            max-width: 34ch;
            padding-bottom: 1rem;
          }
        }

        .pop-courses {
          padding: 4rem 2rem;
          margin: 0rem;
        }

        .desc.mobile-only {
          font-size: 0.8rem;
          width: 100%;
          line-height: 1.8rem;
        }

        .cta {
          min-width: initial;
          font-size: 0.7rem;
          width: 70%;
          margin-top: 4rem;
          padding: 0.8rem 2rem;
          justify-content: space-around;
          max-width: 16rem;
        }
      }
    }
  }
}
</style>
