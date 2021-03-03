<template>
  <div class="contact-us">
    <disk-nav />
    <mobile-navbar />
    <main>
      <section class="txt-cont">
        <h2>kontakta oss</h2>
        <p class="welcome">
          Vi svarar gärna på frågor angående IT-konsulter, utbildare eller andra
          eventuella samarbeten i Göteborg. Kontakta oss här nedan eller hör av
          dig direkt till någon av våra medarbetare. Vi återkommer så fort vi
          kan.
        </p>
        <article>
          <p class="cont-info">Codic Consulting: +46-765-519-733</p>
          <p class="cont-info">Codic Education: +46-768-990-065</p>
          <p class="cont-info">hello@codic.se</p>
        </article>
      </section>

      <section class="location">
        <h2>här finns vi</h2>
        <p>Drottninggatan 38, Göteborg</p>

        <iframe
          width="520"
          height="400"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=drottninggatan%2038%20g%C3%B6teborg+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </section>

      <form @submit.prevent="sendMsg" class="form-cont">
        <div class="full-name">
          <article class="name-cont">
            <label for="firstName">förnamn</label>
            <input
              type="text"
              name="firstName"
              v-model="firstName"
              style="text-transform:capitalize"
              required
            />
          </article>
          <article class="name-cont">
            <label for="lastName">efternamn</label>
            <input
              type="text"
              name="lastName"
              v-model="lastName"
              style="text-transform:capitalize"
              required
            />
          </article>
        </div>
        <label for="email">e-post</label>
        <input type="email" name="email" v-model="userEmail" required />
        <label for="txt">medelande</label>
        <textarea
          name="message"
          id="msg"
          cols="30"
          rows="10"
          v-model="message"
          required
        ></textarea>
        <button>skicka</button>
      </form>
    </main>
    <Footer />
  </div>
</template>

<script>
import emailjs from "emailjs-com"
import DiskNav from "../components/Navigation/DiskNavbar.vue"
import MobileNavbar from "../components/Navigation/MobileNavbar.vue"

import Footer from "../components/Footer/Footer.vue"

export default {
  name: "ContactUs",
  components: {
    DiskNav,
    MobileNavbar,
    Footer,
  },

  data: () => {
    return {
      firstName: "",
      lastName: "",
      userEmail: "",
      message: "",
    }
  },

  methods: {
    sendMsg: async function(e) {
      try {
        emailjs.sendForm(
          "service_ynyez36",
          "template_8tihiwq",
          e.target,
          "user_onDiiBJFfDuLWl2sEFACX",
          {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.userEmail,
            message: this.message,
          }
        )
      } catch (error) {
        alert(
          "Something went wrong while sending your email, please try again later!"
        )
        console.log(error)
      }

      this.firstName = ""
      this.lastName = ""
      this.userEmail = ""
      this.message = ""
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/globalStyles.scss";
.contact-us {
  width: 100%;
  min-height: 100vh;
  @include flex();
  justify-content: space-between;
  //background: #222;

  main {
    width: 100%;
    min-height: 86vh;
    padding: 8rem 0rem 4rem 0rem;
    @include flex();
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    h2 {
      color: $main-color;

      &::first-letter {
        text-transform: uppercase;
      }
    }

    section,
    form {
      margin: 3rem 0rem;
      width: 35%;
      height: 55vh;
      @include flex();
      justify-content: flex-start;
      align-items: flex-start;

      label {
        font-size: 0.8rem;
        color: #888;
        text-transform: capitalize;
      }

      input,
      textarea {
        margin: 0.8rem 0rem 1.6rem 0rem;
        width: 100%;
        padding: 1.3rem;
        background: #0003;
        border: none;
        border-radius: 5px;
        color: #ddd;
        border: 2px solid #ffffff0c;
      }
    }

    form {
      width: 80vw;
    }

    .txt-cont {
      text-align: left;

      p {
        margin: 0.8rem 0rem;
        font-weight: bold;
        color: #ddd;
      }

      .welcome {
        margin: 1rem 0rem 5rem 0rem;
        line-height: 1.8rem;
        color: #bbb;
        font-weight: initial;
      }
    }

    .location {
      p {
        color: #aaa;
        margin: 0.5rem 0rem 1rem 0rem;
      }

      iframe {
        margin: 1rem 0rem;
        width: 100%;
      }
    }

    .form-cont {
      .full-name {
        @include flex();
        flex-direction: row;
        justify-content: space-between;
        width: 100%;

        .name-cont {
          @include flex();
          align-items: flex-start;
          width: 45%;
        }
      }

      button {
        @include btn();
        font-size: 0.9rem;
        padding: 0.8rem 5.2rem;
        align-self: flex-end;
      }
    }
  }
}

// Mobile devices

@media only screen and (max-width: 768px) {
  .contact-us {
    main {
      padding: 2rem;
      flex-direction: column;

      section,
      form {
        width: 100%;
        height: initial;
        min-height: 60vh;
        input,
        textarea {
          padding: 0.8rem;
          max-height: 8rem;
          font-size: 1rem;
          margin: 0.5rem 0rem 1rem 0rem;
        }
      }

      .txt-cont {
        margin-top: 4rem;
        font-size: 0.9rem;

        p.welcome {
          margin-bottom: 2rem;
          max-width: 30rem;
        }

        article {
          margin: 2rem 0rem;
        }
      }

      .form-cont {
        button {
          width: 100%;
          margin: 2rem 0rem;
        }
      }
    }
  }
}

// Smaller devices
@media only screen and (max-height: 668px) {
  .contact-us {
    main {
      form,
      section {
        min-height: 70vh;
      }
    }
  }
}
</style>
