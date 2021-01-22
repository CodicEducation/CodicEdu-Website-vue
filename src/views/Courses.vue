<template>
  <div class="courses">
    <disk-nav />
    <mobile-navbar />
    <main>
      <!-- <div class="head">
        <h2><span>codic</span> education</h2>
        <p>
          I förberedande syfte går våra utbildare en intern utbildning om
          yrkeshögskolans struktur samt vägleds av en forskare inom pedagogik.
          Därmed ser vi till att undervisningen
        </p>
        <p>
          är relevant för era elever och tar ansvar för utbildningens röda tråd.
        </p>
      </div> -->
      <div class="courses-view">
        <section class="txt-cont">
          <h3>våra nya kurser</h3>
          <p class="desktop-only">
            Utveckla dina kunskaper med hjälp av våra kurser
          </p>
          <p class="desktop-only">
            inom områden som Fron-end, Back-end, app- och webutveckling
          </p>
          <p class="mobile-only">
            Utveckla dina kunskaper med hjälp av våra kurser områden som
            Fron-end, Back-end, app- och webutveckling
          </p>
        </section>
        <courses-list />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import DiskNav from "../components/Navigation/DiskNavbar.vue"
import MobileNavbar from "../components/Navigation/MobileNavbar.vue"

import Footer from "../components/Footer/Footer.vue"
import CoursesList from "../components/Course/CoursesList.vue"
export default {
  name: "Course",
  components: {
    DiskNav,
    Footer,
    CoursesList,
    MobileNavbar,
  },
  created() {
    this.$store.dispatch("getCourses")
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/globalStyles.scss";
.courses {
  width: 100%;
  min-height: 100vh;
  @include flex();
  justify-content: space-between;
  background: #1a1a1a;

  main {
    @include flex();
    justify-content: flex-start;
    align-items: center;
    min-height: 100vh;
    width: 100%;

    // .head {
    //   @include flex();
    //   background: #000;
    //   padding: 6rem 0rem;
    //   color: #cfcfcf;
    //   min-height: 40rem;
    //   width: 100%;

    //   h2 {
    //     color: #efefef;
    //     text-transform: capitalize;
    //     margin: 2rem 0rem;
    //     font-size: 1.7rem;
    //     span {
    //       text-transform: uppercase;
    //       font-weight: bolder;
    //       color: $main-color;
    //     }
    //   }

    //   p {
    //     display: block;
    //     width: 74ch;
    //     line-height: 2.1rem;
    //   }
    // }
    .courses-view {
      @include flex();
      padding: 6rem 4rem;
      width: 98%;
      height: 100%;

      .txt-cont {
        align-self: flex-start;
        text-align: left;
        color: #eee;
        margin-bottom: 4rem;
        width: 100%;

        h3 {
          margin: 1rem 0rem;
          text-transform: capitalize;
          border-left: 3px solid #fff6;
          padding: 0rem 1rem;
          color: #efefef;
        }
        p {
          margin: 0.2rem 0rem;
          font-size: 0.94rem;
          border-left: 3px solid #fff6;
          padding: 0rem 1rem;
          color: #aaa;

          &:nth-child(3) {
            padding-bottom: 1.2rem;
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .courses {
    main {
      // .head {
      //   min-height: 30rem;
      //   padding: 2rem;
      //   align-items: flex-start;
      //   h2 {
      //     font-size: 1.4rem;
      //     margin: 0.6rem 0rem;
      //   }

      //   p {
      //     width: initial;
      //     font-size: 0.88rem;
      //     text-align: left;
      //     max-width: 40rem;
      //     line-height: 1.6rem;
      //   }
      // }

      .courses-view {
        padding: 2rem 0rem;
        padding-bottom: 12rem;
        .txt-cont {
          padding: 1rem 2rem;
          margin-top: 4rem;
          margin: 4rem 0rem 1rem 0rem;

          h3 {
            font-size: 1rem;
            border: none;
            padding: initial;
            margin: 0.6rem 0rem;
          }

          p {
            display: inline;
            font-size: 0.8rem;
            border: none;
            padding: 0rem;
            max-width: 30rem;
            line-height: 1.3rem;
          }
        }
      }
    }
  }
}
</style>
