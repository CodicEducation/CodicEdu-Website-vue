<template>
  <nav id="nav">
    <img
      @click="navToHome"
      src="../../assets/images/Codic-logo.svg"
      alt=""
      class="logo"
    />
    <section class="links">
      <router-link to="/">startSidan</router-link>
      <router-link to="/courses">våra kurser</router-link>
      <router-link to="/contact">kontakta oss</router-link>
      <router-link to="/about">om oss</router-link>
      <router-link to="/lia">lia</router-link>
    </section>

    <section class="reg" v-if="!uid">
      <router-link class="logout" to="/login">log in</router-link>
      <router-link class="signup" to="/signup">sign up</router-link>
    </section>
    <section class="reg" v-if="uid">
      <button class="logout" @click="logout">logga ut</button>
      <router-link class="signup" to="/profile">mina sidor</router-link>
    </section>
  </nav>
</template>

<script>
export default {
  methods: {
    logout: function() {
      this.$store.dispatch("logout")
      this.$router.push("/")
    },
    navToHome: function() {
      this.$router.push("/")
    },
  },
  computed: {
    uid() {
      return this.$store.state.uid
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/globalStyles.scss";
nav {
  width: 100%;
  height: 6rem;
  padding: 2rem 6rem;
  @include flex();
  flex-direction: row;
  justify-content: flex-start;

  img {
    cursor: pointer;
  }

  .logo {
    width: 6.5rem;
  }

  a {
    margin: 0rem 0.6rem;
    padding: 0.5rem 1rem;
    color: #888;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.8rem;
    transition: all 0.4s ease;
  }

  .links {
    margin: 0rem 6rem;

    a {
      &.router-link-exact-active {
        color: $main-color;
        font-weight: bold;
        border-bottom: 1.9px solid $main-color;
      }

      &:hover {
        color: $main-color;
      }
    }
  }

  .reg {
    margin-left: auto;

    a,
    button {
      font-weight: bold;
      padding: 0.5rem 1.8rem;
      transition: all 0.4s ease;
      border: none;
      cursor: pointer;
    }

    .signup {
      font-size: 0.7rem;
      color: #f2f2f2;
      background: #444;
      border-radius: 2rem;
      &:hover {
        color: #aaa;
        background: #555;
      }
    }

    .logout {
      font-size: 0.8rem;
      color: #666;
      background: transparent;
      &:hover {
        color: #aaa;
      }
      &::first-letter {
        text-transform: uppercase;
      }
    }
  }
}

@media only screen and (max-width: 1350px) {
  nav {
    display: none;
  }
}
</style>
