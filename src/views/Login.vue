<template>
  <div class="login">
    <reg-header />
    <form @submit.prevent="login">
      <article class="inputField">
        <img src="../assets/images/email.svg" alt="" />
        <input
          type="email"
          placeholder="E-post "
          v-model="loginEmail"
          required
        />
      </article>
      <article class="inputField">
        <img src="../assets/images/password.svg" alt="" />
        <input
          type="password"
          placeholder="Lösenord"
          v-model="loginPass"
          required
        />
      </article>
      <button>log in</button>
    </form>
    <footer>
      <p>skapa ett konto <router-link to="/signup">här</router-link></p>
    </footer>
  </div>
</template>

<script>
import RegHeader from "../components/RegHeader.vue"
export default {
  data: () => {
    return {
      loginEmail: "",
      loginPass: "",
    }
  },
  components: {
    RegHeader,
  },
  methods: {
    login: function() {
      let user = {
        email: this.loginEmail,
        password: this.loginPass,
      }
      this.$store.dispatch("login", user)
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/globalStyles.scss";

.login {
  width: 100%;
  height: 100vh;
  @include flex();
  color: #f2f2f2;
  background: #222;

  form {
    margin: 6rem 0rem;
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
        color: #ccc;
      }
    }
  }
}

@media only screen and (max-width: 1025px) {
  .login {
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
  .login {
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
