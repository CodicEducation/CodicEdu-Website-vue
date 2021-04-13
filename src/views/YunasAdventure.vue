<template>
  <div class="wrapper">
    <disk-nav />
    <mobile-navbar />
    <main>
      <section class="head">
        <article>
          <blockquote>Följ med Yuna i hennes äventyr</blockquote>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit nemo
            atque corporis unde, sit odit laboriosam autem nesciunt nostrum
            harum rerum suscipit similique omnis dolor accusantium? Voluptas,
            voluptatibus consectetur non eveniet, reiciendis error facere ullam
            magni, odit iure fugit qui.
          </p>
        </article>
        <img src="../assets/games-assets/images/Icon.svg" alt="" />
      </section>
      <section class="intro">
        <blockquote>
          Välj mellan djur eller fordon, och utförska de olika kategorier
        </blockquote>

        <img src="../assets/games-assets/images/categories.jpg" alt="" />
      </section>

      <section class="categories">
        <h2>olika kategorier</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ab.
        </p>
        <div class="screens">
          <article>
            <h4>Djur</h4>
            <img
              src="../assets/games-assets/images/screen-animals.jpg"
              alt=""
            />
          </article>
          <article>
            <h4>Fordon</h4>
            <img
              src="../assets/games-assets/images/screen-vehicles.jpg"
              alt=""
            />
          </article>
        </div>
      </section>

      <section class="quiz">
        <img src="../assets/games-assets/images/quiz-img.svg" alt="" />
        <article>
          <h2>qiuz nivå</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis sit
            veritatis officia, autem accusantium voluptate maiores laudantium
            vel non. Quibusdam.
          </p>
        </article>
      </section>

      <section class="download">
        <blockquote>
          Ladda ner Yuna's Adventures <br />
          Tilljänglig för båda Android och IOS
        </blockquote>
        <div class="content">
          <img src="../assets/games-assets/images/download.svg" alt="" />
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
.wrapper {
  min-height: 100vh;
  width: 100vw;
  @include flex();
  justify-content: space-between;

  main {
    @include flex();
    width: 100%;
    padding: 6rem;

    h2 {
      color: $main-color;
      text-transform: uppercase;
      margin: 1rem 0rem;
    }

    section {
      width: 100%;
      @include flex();
      padding: 8rem 0rem;
    }

    article {
      @include flex();
    }

    blockquote {
      color: $main-color;
      font-size: 2.2rem;
      font-weight: bold;
      line-height: 3.4rem;
    }

    p {
      line-height: 1.8rem;
    }

    section.head {
      flex-direction: row;
      justify-content: space-between;

      article {
        text-align: left;
        align-items: flex-start;

        p {
          margin: 2rem 0rem;
          max-width: 80ch;
        }
      }

      img {
        margin: 0rem 4rem;
      }
    }

    section.intro {
      flex-direction: row;
      justify-content: space-between;

      blockquote {
        max-width: 25ch;
        text-align: left;
      }
    }

    section.categories {
      div {
        @include flex();
        width: 100%;
        margin-top: 4rem;
        flex-direction: row;
        justify-content: space-around;

        article {
          h4 {
            margin: 2rem 0rem;
          }
        }
      }
    }

    section.quiz {
      width: 76%;
      flex-direction: row;
      justify-content: space-between;
      text-align: left;

      article {
        align-items: flex-start;
        p {
          max-width: 50ch;
        }
      }
    }
    section.download {
      width: 100%;
      text-align: left;
      flex-direction: row;
      justify-content: space-between;
    }
  }
}
</style>
