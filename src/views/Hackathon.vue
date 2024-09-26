<template>
  <div class="wrapper">
    <disk-nav />
    <mobile-navbar />

    <main>
      <section class="header">
        <div class="info">
          <h1>välkommen till Spel-Hackathon 2021!</h1>
          <p class="date">21 - 23 maj 2021</p>
        </div>
        <div class="content">
          <blockquote>
            Gillar du spel? Är du nyfiken på IT? <br />
            Testa på att programmera ditt eget spel i Scratch!
          </blockquote>

          <p>
            Helgen den 23-25 april arrangerar Yrkeshögskolan Campus Mölndal och
            Codic Education ett Hackathon med temat Spel. Om du känner att du
            kanske skulle vilja arbeta inom IT-branschen framöver så är detta
            ett bra tillfälle att testa på enkel programmering. Vi kommer att
            hjälpa alla deltagare att komma igång. Inga förkunskaper krävs!
          </p>
          <blockquote>
            Du får en introduktion, tillgång till handledare, träffa folk från
            IT-branschen och YH-utbildningar. Vi samlas i grupper på Discord.
          </blockquote>

          <a
            href="https://www.facebook.com/events/249421390173261/"
            class="fb"
            target="_blank"
          >
            <img src="../assets/images/facebook.svg" alt="" />
            <p>Spel-Hackathon 2021</p>
          </a>
        </div>
        <section class="mention">
          <p>
            Bild tagen av <span>Andre Hunter</span> |
            <a href="https://unsplash.com/@dre0316">profil</a>
          </p>
        </section>
      </section>

      <!-- /////// -->

      <section class="help">
        <div class="content">
          <h2>du får</h2>
          <ul>
            <li>
              <img src="../assets/images/check.svg" alt="" />
              <p>En introduktion</p>
            </li>
            <li>
              <img src="../assets/images/check.svg" alt="" />
              <p>Tillgång till handledare</p>
            </li>
            <li>
              <img src="../assets/images/check.svg" alt="" />
              <p>Träffa folk från branschen</p>
            </li>
          </ul>
        </div>
        <div class="illustration desktop-only">
          <Lottie :options="defaultOptions" :height="540" :width="540" />
        </div>
        <div></div>
      </section>

      <!-- //////  -->
      <!-- 
      <section class="participation">
        <h2>delta i vårat hack</h2>
        <ul>
          <li>
            <article>
              <p class="title">Uppgift</p>
              <p>Skapa ett spel.</p>
            </article>
          </li>
          <li>
            <article>
              <p class="title">Program</p>
              <p>Scratch</p>
            </article>
          </li>
          <li>
            <article>
              <p class="title">Datum</p>
              <p>23-25 april 2021</p>
            </article>
          </li>
          <li>
            <article>
              <p class="title">Ålder</p>
              <p>18-24 år</p>
            </article>
          </li>
        </ul>
        <p class="end-txt desktop-only">
          Grupper eller individuellt, Fina priser!
        </p>
        <p class="end-txt mobile-only">
          Grupper eller individuellt, <br />
          Fina priser!
        </p>
      </section>
       -->

      <!-- ////// -->
      <section class="period">
        <h2>TidsSchema</h2>
        <blockquote>
          Du kommer att ingå i en mindre grupp och delas upp i Discord (du kan
          även arbeta helt på egen hand).
        </blockquote>
        <article>
          <h4>Fredag</h4>
          <p>
            Kl 17.00 Fredagskvällen inleds med en introduktion till Scratch
            (programmet som ska användas för att skapa spel) Därefter kommer ni
            igång med uppgiften.
          </p>
        </article>
        <article>
          <h4>Lördag</h4>
          <p>
            Under lördag och söndag kommer du att arbeta med uppgiften.
            Handledare kommer att finnas tillgängliga på discord för
            handledning.
          </p>
        </article>
        <article>
          <h4>Söndag</h4>
          <p><span>Deadline</span> för inlämning 23:59.</p>
        </article>
      </section>

      <section class="question">
        <img src="../assets/images/success.svg" alt="" />
        <div class="content">
          <h2>Varför ska du vara med?</h2>
          <p>
            Förutom fina priser och möjlighet att öva sig i att skapa spel så
            finns det även chans till en karriär inom IT. Arbetsmarknaden ser
            mycket bra ut för utvecklare/programmerare – det krävs inte så
            mycket. Om du går en YH-utbildning och håller fokus och engagemang
            under två år, sen kan du vara där! Du kan få ett bra jobb på kort
            tid.
          </p>
        </div>
      </section>

      <section class="collaboration">
        <h2>Samarbete</h2>
        <p>
          Vi som arrangerar detta Spel-Hackathon har en gemensam idé och en
          vilja att nå unga för att tipsa om IT-branschen. Vi vill inspirera er
          och visa på möjligheterna inom IT. Yrkeshögskolan
          <span> Campus Mölndal</span>
          erbjuder IT-utbildningar inom tre områden: .NET-utvecklare, Moln- och
          Virtualiseringsspecialist och IT-projektledare.
          <span> Codic Education</span>
          erbjuder utbildare inom IT och är ett systerföretag till Codic som hyr
          ut IT-konsulter.
        </p>
      </section>

      <section class="contact">
        <img src="../assets/images/pacman.svg" class=" desktop-only" alt="" />
        <h2>Anmäl dig här</h2>
        <p class="age">Åldersgräns: 18-24</p>
        <form @submit.prevent="sendAplication" class="form-cont">
          <label for="name">Namn</label>
          <input type="text" name="name" v-model="userName" required />

          <label for="number">Telefonnummer</label>
          <input type="number" name="number" v-model="userNumber" required />

          <label for="email">e-post</label>
          <input type="email" name="email" v-model="userEmail" required />

          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value="Intresseanmälan Spel-Hackathon"
          />

          <button>skicka</button>
        </form>
        <p>
          Dina personuppgifter samlas endast in för att kunna kontakta dig inför
          eventet. Personuppgifterna kommer aldrig säljas till tredje part och
          heller inte sparas efter eventet blivit genomfört.
        </p>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script>
import DiskNav from "../components/Navigation/DiskNavbar"
import MobileNavbar from "../components/Navigation/MobileNavbar"
import Footer from "../components/Footer/Footer"

import * as animationData from "../assets/animations/spaceInvaders.json"
import Lottie from "vue-lottie"

export default {
  components: {
    DiskNav,
    MobileNavbar,
    Footer,
    // Animation,
    Lottie,
  },
  data() {
    return {
      defaultOptions: { animationData: animationData.default },
      userName: "",
      userNumber: "",
      userEmail: "",
    }
  },
  methods: {
    sendAplication: async function() {
      const url = "https://formsubmit.co/ajax/maria.bryl@codic.se"
      const data = {
        name: this.userName,
        email: this.userEmail,
        number: this.userNumber,
      }

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      })

      const results = await res.json()

      console.log(results)

      this.userName = ""
      this.userEmail = ""
      this.userNumber = ""
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/globalStyles.scss";
.wrapper {
  width: 100vw;
  min-height: 100vh;
  @include flex();
  justify-content: space-between;

  input[type="number"] {
    -moz-appearance: textfield;
    margin: 0;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  main {
    width: 100%;
    min-height: 80vh;
    @include flex();
    padding: 0em 0rem;
    align-items: flex-start;
    justify-content: flex-start;
    line-height: 2.4rem;

    h1 {
      font-size: 2rem;
    }

    h2 {
      color: $main-color;
      text-transform: uppercase;
      margin: 2rem 0rem;
    }

    p {
      color: #bbb;
      text-align: left;
    }

    section {
      min-height: 40vh;
      @include flex();

      ul {
        list-style: none;
        @include flex();

        li {
          @include flex();
          flex-direction: row;
        }
      }
    }

    section.header {
      position: relative;
      justify-content: flex-start;
      padding: 2rem 0rem;
      width: 100%;
      min-height: 150vh;
      background-image: url("../assets/images/hackathon-bg.jpg");
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;

      .info {
        width: 60%;
        min-height: 10vh;
        color: $main-color;
        text-transform: uppercase;
        font-weight: bold;
        position: relative;
        background: #111a;
        padding: 2rem 0rem;
        @include flex();
        border-radius: 10px;
        margin: 2rem 0rem;

        p {
          right: 10%;
          border-radius: 8px;
          padding: 1rem;
          color: $main-color;
        }
      }

      .content {
        position: relative;
        margin: 8rem 0rem 0rem 0rem;
        width: 100%;
        background-color: #111e;
        padding: 3rem;
        text-align: left;
        line-height: 2rem;
        font-size: 1rem;
        @include flex();
        text-align: center;
        // font-weight: bold;
        blockquote {
          font-size: 1.4rem;
          font-weight: bold;
          margin: 2rem 0rem;
          max-width: 60ch;
        }

        p {
          color: #ccc;
          max-width: 110ch;
          margin: 1rem 0rem;
          text-align: left;
        }

        a {
          position: absolute;
          top: 50px;
          right: 50px;
          @include flex();
          flex-direction: row;
          background: #3a7bdc;
          text-decoration: none;
          color: #eee;
          border-radius: 10px;
          padding: 0.6rem 1rem;

          p {
            color: #eee;
            font-weight: bold;
            margin: 0rem 1rem;
          }
        }
      }

      h2 {
        margin-top: auto;
        align-self: flex-start;
        max-width: 50ch;
        text-align: left;
      }

      .mention {
        position: absolute;
        bottom: 1rem;
        left: 2rem;
        min-height: initial;
        p {
          font-size: 0.9rem;

          span {
            font-weight: bold;
            color: #fff;
          }

          a {
            font-weight: bold;
            color: $main-color;
          }
        }
      }
    }

    section.help {
      width: 100%;
      background-color: #141414;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 6rem;
      position: relative;

      .content {
        @include flex();
        justify-content: flex-start;
        align-items: flex-start;
      }

      ul {
        justify-content: flex-start;
        align-items: flex-start;

        li {
          align-items: center;
          justify-content: flex-start;
          margin: 0.8rem 0rem;

          p {
            margin: 0rem 2.5rem;
            color: #afafaf;
          }
        }
      }
      .illustration {
        position: absolute;
        top: -58%;
        right: 0%;
      }
    }

    // ====== period section ===== //

    // section.participation {
    //   width: 100%;
    //   margin: 10rem 0rem;
    //   ul {
    //     width: 100%;
    //     margin: 4rem 0rem;

    //     li {
    //       width: 100%;
    //       background: #151515;
    //       margin: 0.5rem 0rem;
    //       padding: 1rem;
    //       article {
    //         width: 50%;
    //         @include flex;
    //         flex-direction: row;
    //         justify-content: space-between;

    //         p {
    //           color: #afafaf;
    //         }

    //         .title {
    //           font-weight: bold;
    //           color: #eee;
    //         }
    //       }
    //     }
    //   }

    //   .end-txt {
    //     font-size: 1.2rem;
    //     font-weight: bold;
    //   }
    // }

    section.period {
      margin: 10rem 0rem;
      width: 100%;

      h2 {
        margin: 1rem 0rem;
      }

      blockquote {
        max-width: 50ch;
        margin-bottom: 6rem;
        text-align: center;
        line-height: 1.8rem;
      }

      article {
        background: #141414;
        width: 100%;
        padding: 2rem 4rem;
        margin: 0.4rem 0rem;
        @include flex();
        align-items: flex-start;
        border-left: 4px solid $main-color;

        p {
          margin: 1rem 0rem;
          max-width: 80ch;
          line-height: 1.8rem;
        }
      }
    }

    // ======= question section =======//

    section.question {
      width: 100%;
      @include flex();
      flex-direction: row;
      justify-content: space-around;
      margin: 2rem 0rem;

      .content {
        text-align: left;
        p {
          max-width: 80ch;
          line-height: 2.4rem;
        }
      }
    }

    // ====== collaboration section ====== //

    section.collaboration {
      width: 100%;
      margin: 12rem 0rem;
      justify-content: center;

      p {
        margin: 1rem 0rem;
        max-width: 100ch;
        text-align: center;

        span {
          font-weight: bold;
          color: #eee;
        }
      }
    }

    // =========== contact section ======== //

    section.contact {
      width: 100%;
      align-items: flex-start;
      position: relative;
      padding: 0rem 4rem;
      margin: 8rem 0rem;

      .age {
        margin: 0rem 0rem;
        align-self: flex-start;
      }

      img {
        position: absolute;
        top: -26%;
        right: -4rem;
      }

      form {
        min-width: 60%;
        @include flex();
        justify-content: flex-start;
        align-items: flex-start;
        margin: 2rem 0rem;
        align-self: center;

        label {
          font-size: 0.8rem;
          color: #888;
          text-transform: capitalize;
        }

        input {
          margin: 0.8rem 0rem 1rem 0rem;
          width: 100%;
          padding: 1.3rem;
          background: #0003;
          border: none;
          border-radius: 5px;
          color: #ddd;
          border: 2px solid #ffffff0c;
        }

        button {
          margin: 2rem 0rem;
          @include btn();
          font-size: 0.9rem;
          padding: 0.8rem 5.2rem;
          align-self: center;
        }
      }

      p {
        align-self: center;
        max-width: 90ch;
        text-align: center;
        color: #eee;
        margin: 2rem 0rem;
        font-weight: bold;
      }
    }
  }
}

// <======== mobile view ========>

@media only screen and (max-width: 1250px) {
  .wrapper {
    main {
      padding: 2rem 0rem;

      h2 {
        font-size: 1.2rem;
      }

      section.header {
        padding: 6rem 0rem;
        background-image: url("../assets/images/hackathon-bg-mobile.jpg");
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        -moz-background-size: cover;
        -webkit-background-size: cover;
        -o-background-size: cover;
        background-attachment: initial;

        .info {
          width: 100%;

          h1 {
            font-size: 1.4rem;
          }

          p {
            position: initial;
            border-radius: 0;
            margin: 1rem 0rem;
          }
        }

        .content {
          padding: 2rem 2rem;

          blockquote {
            font-size: 1.1rem;
          }

          a {
            margin: 2rem 0rem;
            position: initial;
          }
        }
      }

      section.help {
        margin: 0rem 0rem 4rem 0rem;
        padding: 10rem 3rem;
        text-align: left;

        .content {
          align-items: center;
          ul {
            li {
              p {
                margin: 0rem 0rem 0rem 2rem;
                line-height: 1.8rem;
              }
            }
          }
        }
      }

      // section.participation {
      //   ul {
      //     li {
      //       article {
      //         width: 80%;
      //       }
      //     }
      //   }
      // }

      section.period {
        blockquote {
          max-width: 30ch;
        }
      }

      section.question {
        flex-direction: column-reverse;
        padding: 2rem 3rem;

        img {
          margin-top: 4rem;
          max-width: 80vw;
        }
      }

      section.collaboration {
        margin: 4rem 0rem;
        padding: 2rem 3rem;
        align-items: flex-start;

        p {
          text-align: left;
        }
      }

      section.contact {
        padding: 2rem;
        form {
          width: 100%;
          input {
            padding: 0.8rem;
            font-size: 1rem;
            margin: 0.5rem 0rem 1rem 0rem;
          }
        }

        p {
          text-align: center;
        }
      }
    }
  }
}
</style>
