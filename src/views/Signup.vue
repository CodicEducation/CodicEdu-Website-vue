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
      <button>skicka</button>
    </form>
    <footer>
      <p>
        har du redan ett konto <router-link to="/login">logga in</router-link>
      </p>
    </footer>
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
    }
  },
  computed: {},

  watch: {},

  methods: {
    signin: async function() {
      //password validation
      if (this.userPass === "") {
        alert("Password cannot be empty")
      } else if (
        this.userPass != this.passConfermation ||
        this.passConfermation === ""
      ) {
        alert("Make sure your password matches the passwprd confermation")
      } else {
        this.sendUserToDB()
        this.$router.push("/")
      }
    },

    sendUserToDB: function() {
      let user = {
        name: this.userName,
        email: this.userEmail,
        password: this.userPass,
      }
      console.log(user)
      this.$store.dispatch("signUser", user)
    },

    loginUser: function() {
      alert("Your account has been registerd successfully!")
      this.$router.push("/")
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
</style>
