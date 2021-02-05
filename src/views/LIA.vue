<template>
  <div class="lia">
    <disk-nav />
    <mobile-navbar />

    <main>
      <h2>
        <span> Codic </span> Education <br />
        tar gärna emot studerande på LIA!
      </h2>

      <section class="infoContainer">
        <div class="liaInfo">
          <img src="../assets/images/team.svg" alt="" />
          <p>
            Hos oss får du arbeta med skarpa projekt i team tillsammans med
            andra studerande.
          </p>
        </div>

        <div class="liaInfo">
          <img src="../assets/images/fistBump.svg" alt="" />
          <p>
            Våra handledare är tillgängliga under hela LIA perioden och stöttar
            dig och ditt team.
          </p>
        </div>

        <div class="liaInfo">
          <img src="../assets/images/pen.svg" alt="" />
          <p>
            Här har du chansen att kompetensutvecklas, förverkliga dina egna
            idéer och hänga med våra handledare och utbildare. Du har även
            chansen att agera projektledare/projektägare! Vi ger dig som
            studerande möjligheten att komma med egna projektförslag och hjälper
            dig att förverkliga dom.
          </p>
        </div>
      </section>

      <section class="liaContact">
        <h4>Är du intresserad av att göra LIA på Codic Education?</h4>
        <div class="contact-cont">
          <img src="../assets/images/contactPersons/Arash Sajjady.png" alt="" />
          <article>
            <p>
              - Skicka ditt CV till: Arash Sajjady <br />
              Arash.Sajjady@codic.se
            </p>
            <button class="cta">skicka mail</button>
          </article>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script>
import DiskNav from "../components/Navigation/DiskNavbar.vue"
import MobileNavbar from "../components/Navigation/MobileNavbar.vue"

import Footer from "../components/Footer/Footer.vue"
export default {
  components: {
    DiskNav,
    MobileNavbar,
    Footer,
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/globalStyles.scss";

.lia {
  @include flex();
  justify-content: space-between;

  h2 {
    color: #eee;
    text-transform: uppercase;
    margin: 1.5rem 0rem;
    text-align: left;
    line-height: 2.6rem;

    span {
      color: $main-color;
    }
  }

  p {
    color: #aaa;
    line-height: 1.8rem;
  }

  main {
    min-height: 100vh;
    width: 100%;
    padding: 8rem;

    @include flex();
    align-items: flex-start;
    justify-content: flex-start;

    .infoContainer {
      min-height: 70vh;
      width: 100%;
      margin: 2rem 0rem;
      @include flex();
      justify-content: space-around;

      .liaInfo {
        padding: 2rem;
        background: #1118;
        width: 100vw;
        min-height: 12rem;
        margin: 0.2rem 0rem;
        @include flex();
        flex-direction: row;
        justify-content: flex-start;

        img {
          padding-left: 8rem;
          opacity: 0.9;
        }

        p {
          text-align: left;
          margin: 0rem 4rem;
          max-width: 82ch;
          line-height: 2rem;
        }
      }
    }

    .liaContact {
      margin-top: 10rem;

      h4 {
        font-size: 1.2rem;
      }

      .contact-cont {
        margin: 4rem 0rem;
        @include flex();
        flex-direction: row;

        img {
          margin-right: 4rem;
        }

        article {
          p {
            text-align: left;
            margin: 1rem 0rem;
            line-height: 2rem;
          }

          button {
            @include btn();
            padding: 0.6rem 4rem;
            margin: 1.5rem 0rem;
          }
        }
      }
    }
  }
}
</style>
