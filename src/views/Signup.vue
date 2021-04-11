<template>
  <div class="signup">
    <reg-header />
    <form @submit.prevent="signin">
      <article class="inputField">
        <img src="../assets/images/userName.svg" alt="" />
        <input
          type="text"
          placeholder="Användarnamn"
          v-model="userName"
          required
        />
      </article>

      <article class="inputField">
        <img src="../assets/images/email.svg" alt="" />
        <input
          type="email"
          placeholder="E-post "
          v-model="userEmail"
          required
        />
      </article>

      <article class="inputField">
        <img src="../assets/images/password.svg" alt="" />
        <input
          type="password"
          placeholder="Lösenord"
          v-model="userPass"
          required
        />
      </article>

      <article class="inputField">
        <img src="../assets/images/password.svg" alt="" />
        <input
          type="password"
          placeholder="Bekräfta ditt lösenord"
          v-model="passConfermation"
          required
        />
      </article>
      <p class="error" v-if="passNotMatch">
        Make sure your password matches the passwprd confermation
      </p>
      <p class="error" v-if="passTooShort">
        Make sure your password is 6 characters or more
      </p>
      <button>skicka</button>
    </form>
    <footer>
      <p>
        har du redan ett konto <router-link to="/login">logga in</router-link>
      </p>
    </footer>
    <div class="modalOverlay" v-if="showModal">
      <section class="modalContainer">
        <p>
          {{ modalMssg }}
        </p>
        <button @click="closeModal">tillbaka</button>
      </section>
    </div>
  </div>
</template>

<script>
import RegHeader from "../components/RegHeader.vue"
export default {
  components: {
    RegHeader,
  },
  data: () => {
    return {
      userName: "",
      userEmail: "",
      userPass: "",
      passConfermation: "",
      passNotMatch: false,
      passTooShort: false,
      showModal: false,
      showErrorMssg: false,
      modalMssg: `Ett verifieringsmeddelande har skickats till ditt email`,
      oldErrorMssgVal: "",
    }
  },
  computed: {
    errorMssg() {
      return this.$store.state.errorMssg
    },
  },

  watch: {
    errorMssg(newErrorMssg, oldErrorMssg) {
      this.oldErrorMssgVal = oldErrorMssg
      this.showErrorMssg = true
      this.modalMssg = newErrorMssg
    },
  },

  methods: {
    signin: async function() {
      //password validation
      if (
        this.userPass != this.passConfermation ||
        this.passConfermation === ""
      ) {
        this.passNotMatch = true
        this.passTooShort = false
      } else if (this.userPass.length < 6) {
        this.passTooShort = true
        this.passNotMatch = false
      } else {
        this.passTooShort = false
        this.passNotMatch = false
        this.showModal = true
        this.sendUserToDB()
      }
    },

    sendUserToDB: function() {
      let user = {
        name: this.userName,
        email: this.userEmail,
        password: this.userPass,
      }
      this.$store.dispatch("signUser", user)
    },

    closeModal: function() {
      this.showModal = false
      this.userName = ""
      this.userEmail = ""
      this.userPass = ""
      this.passConfermation = ""
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/globalStyles.scss";

.signup {
  background: #222;
  width: 100%;
  height: 100vh;
  @include flex();
  color: #f2f2f2;

  form {
    margin: 4rem 0rem;
    article {
      @include cotumeInputField();
    }

    .error {
      color: rgb(215, 49, 49);
      font-size: 0.8rem;
    }

    button {
      margin: 2rem 0rem;
      padding: 1.2rem 5rem;
      @include btn();

      &:hover {
        @include hover();
      }
    }
  }

  footer {
    p {
      color: #aaa;

      &::first-letter {
        text-transform: capitalize;
      }

      a {
        font-weight: bold;
        color: #e0e0e0;
      }
    }
  }
}

@media only screen and (max-width: 1025px) {
  .signup {
    form {
      width: 60%;

      article {
        @include flex();
        flex-direction: row;
        justify-content: flex-start;
      }
    }
  }
}

@media only screen and (max-width: 540px) {
  .signup {
    form {
      width: 86%;
      article {
        img {
          width: 0.7rem;
        }
        input {
          padding: 0.9rem;
          width: 80%;
          font-size: 0.9rem;
        }
      }

      button {
        padding: 0.8rem 4rem;
        font-size: 0.8rem;
      }
    }
    footer {
      p {
        font-size: 0.9rem;
      }
    }
  }
}

.modalOverlay {
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: #0005;
  backdrop-filter: blur(2px);
  @include flex();

  .modalContainer {
    padding: 3rem 3rem 2rem 3rem;
    width: 40%;
    height: 26%;
    background: #eee;
    border-radius: 20px;
    @include flex();
    justify-content: space-around;
    color: #444;
    font-family: "Montserrat", sans-serif;

    button {
      @include btn();
      padding: 0.8rem 2.8rem;

      &:hover {
        @include hover();
      }
    }
  }
}
</style>
