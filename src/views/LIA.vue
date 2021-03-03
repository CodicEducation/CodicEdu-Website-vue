<template>
  <div class="lia">
    <disk-nav />
    <mobile-navbar />

    <main>
      <h2>
        <span> Codic </span> Education <br class="mobile-only" />
        tar gärna emot <br class="mobile-only" />
        studerande på LIA!
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
              Skicka ditt CV till: Arash Sajjady <br />
              - arash.Sajjady@codic.se
            </p>
            <a
              href="mailto:arash.Sajjady@codic.se?subject=LIA ansökan"
              class="cta"
              action="mailto:someone@example.com"
            >
              kontakta
            </a>
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
    margin: 1.5rem 0rem;
    text-align: left;
    line-height: 2.6rem;

    span {
      color: $main-color;
      text-transform: uppercase;
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
        background: #1116;
        width: 100vw;
        min-height: 12rem;
        margin: 0.2rem 0rem;
        @include flex();
        flex-direction: row;
        justify-content: flex-start;

        img {
          padding-left: 8rem;
          opacity: 0.9;
          transform: scale(0.86);
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
      margin: 10rem 0rem 6rem 0rem;

      h4 {
        font-size: 1.2rem;
      }

      .contact-cont {
        margin: 4rem 0rem;
        @include flex();
        flex-direction: row;

        img {
          margin-right: 4rem;
          transform: scale(0.8);
        }

        article {
          p {
            text-align: left;
            margin: 1rem 0rem;
            line-height: 2rem;
          }

          a {
            display: block;
            text-decoration: none;
            @include btn();
            padding: 0.5rem 3.5rem;
            margin: 1.5rem 0rem;
            cursor: pointer;

            &:hover {
              background: #eee;
              color: $main-color;
            }
          }
        }
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .lia {
    h2 {
      align-self: center;
      text-align: center;
      font-size: 1.3rem;
      line-height: 2rem;
      margin: 6rem 0rem;
    }
    main {
      padding: 2rem;

      .infoContainer {
        .liaInfo {
          padding: 6rem 2rem;
          margin: 0.4rem 0rem;
          @include flex();

          img {
            padding-left: 0rem;
            margin-bottom: 2rem;
          }

          p {
            text-align: center;
            margin: 0rem 1rem;
            line-height: 1.6rem;
          }
        }
      }

      .liaContact {
        width: 100%;
        margin-top: 4rem;
        @include flex();
        justify-content: flex-start;

        h4 {
          font-size: 1.1rem;
          text-align: left;
          line-height: 1.6rem;
          max-width: 25ch;
        }

        .contact-cont {
          margin: 4rem 0rem;
          width: 100%;
          @include flex();

          img {
            margin-right: 0rem;
            margin: 2rem 0rem;
          }

          article {
            p {
              text-align: left;
              margin: 1rem 0rem;
              line-height: 2rem;
            }

            button {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>
