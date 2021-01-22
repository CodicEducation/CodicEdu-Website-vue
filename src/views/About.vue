<template>
  <div class="about">
    <disk-nav />
    <mobile-navbar />

    <main>
      <section class="head">
        <blockquote>välkommen!</blockquote>
        <p>
          Söker du kompetenta lärare till en yrkesutbildning, kodstuga eller
          gästföreläsning i Göteborg? IT-sektorn är under ständig förändring och
          det är viktigt att tillhandahålla den senaste kompetensen till
          framtidens utvecklare. Genom Codic Education får du tillgång till
          pedagogisk och kompetent personal som passar just din
          utbildningsmodell.
        </p>
      </section>
      <section class="about-us">
        <h2>Vem är vi?</h2>
        <p>
          <span>Codic Education</span> har knoppats av från Codic Consulting och
          besitter samma tekniska kompetens och rekryteringsexpertis som
          moderbolaget. I förberedande syfte går våra utbildare en intern
          utbildning om yrkeshögskolans struktur samt vägleds av en forskare
          inom pedagogik. Därmed ser vi till att undervisningen är relevant för
          era elever och tar ansvar för utbildningens röda tråd.
        </p>
      </section>
      <section class="offer">
        <h2>Det här erbjuder vi</h2>

        <ul>
          <li>
            <p>Utbildning inom IT</p>
          </li>
          <li>
            <p>Deltagande i ledningsgrupper</p>
          </li>
          <li>
            <p>Kodstugor</p>
          </li>
          <li>
            <p>Hela utbildningspaket eller enstaka kurser</p>
          </li>
          <li>
            <p>Gästföreläsningar</p>
          </li>
          <li>
            <p>Framtagning av kursmaterial och kursplaner</p>
          </li>
        </ul>
      </section>
      <section class="contact">
        <h2>kontakta oss</h2>
        <p>
          Hör av dig direkt till någon av våra medarbetare. <br />
          Vi återkommer så fort vi kan.
        </p>
        <div class="cards">
          <contact-cards
            v-for="contact in contactPersons"
            :key="contact.name"
            :fullName="contact.fullName"
            :email="contact.email"
            :number="contact.number"
            :title="contact.title"
          />
        </div>
      </section>
      <section class="reviews">
        <h2>Vad tycker eleverna?</h2>
        <p>
          Våra IT-lärare arbetar för att förmedla komplexa ämnen på ett så
          pedagogiskt, engagerande och tydligt sätt som möjligt. På
          YH-utbildningar runtom i Göteborg har de blivit uppskattade av både
          utbildningsledare och elever för väl utförda och strukturerade kurser
          och utbildningar. Här nedan kan du läsa den respons som våra IT-lärare
          har mottagit från sina elever.
        </p>
        <div class="rev-section">
          <review-cards
            v-for="review in reviews"
            :key="review.review"
            :review="review.review"
            :reviewer="review.reviewer"
          />
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script>
import DiskNav from "../components/Navigation/DiskNavbar.vue"
import MobileNavbar from "../components/Navigation/MobileNavbar.vue"

import ContactCards from "../components/ContactCards.vue"
import ReviewCards from "../components/ReviewCards.vue"

import Footer from "../components/Footer/Footer.vue"
export default {
  components: {
    DiskNav,
    MobileNavbar,
    ContactCards,
    ReviewCards,
    Footer,
  },
  computed: {
    contactPersons() {
      return this.$store.state.contactPersons
    },
    reviews() {
      return this.$store.state.reviews
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/globalStyles.scss";
.about {
  @include flex();
  width: 100vw;
  min-height: 100vh;

  h2 {
    color: $main-color;
    text-transform: uppercase;
    margin: 1.5rem 0rem;
  }

  p {
    color: #aaa;
    line-height: 1.8rem;
  }
  main {
    @include flex();
    align-items: flex-start;
    min-height: 100vh;
    width: 100vw;

    .head {
      @include flex();
      width: 100%;
      min-height: 80vh;
      background: url("../assets/images/bg.jpg");
      background-size: cover;
      background-repeat: no-repeat;

      blockquote {
        font-size: 2.4rem;
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
        text-transform: uppercase;
        color: $main-color;
      }

      p {
        margin: 2rem;
        max-width: 40rem;
        line-height: 2rem;
        color: #f2f2f2;
      }
    }

    .about-us {
      width: 100%;
      padding: 10rem 3rem;
      @include flex();

      p {
        max-width: 50rem;
        span {
          color: #efefef;
          font-weight: bold;
        }
      }
    }

    .offer {
      width: 100%;
      padding: 4rem;
      @include flex();
      align-items: flex-start;
      background: #ffffff06;

      ul {
        @include flex();
        //justify-content: flex-start;
        flex-direction: row;
        flex-wrap: wrap;

        li {
          width: 30%;
          flex-grow: 4;
          margin: 1rem;
          text-align: left;
        }
      }
    }

    .contact {
      width: 100%;
      min-height: 80vh;
      @include flex();
      padding: 10rem 0rem 6rem 0rem;

      .cards {
        width: 100%;
        margin: 4rem 0rem;
        @include flex();
        flex-direction: row;
        flex-wrap: wrap;
      }
    }

    .reviews {
      width: 100%;
      @include flex();
      align-items: flex-start;
      padding: 4rem;
      text-align: left;

      p {
        max-width: 65rem;
      }

      .rev-section {
        margin: 4rem 0rem;
        width: 100%;
        @include flex();
        flex-direction: row;
        flex-wrap: wrap;
      }
    }
  }
}
</style>
