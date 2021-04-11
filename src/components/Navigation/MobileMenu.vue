<template>
  <transition name="fade" mode="out-in">
    <div class="mobile-menu">
      <button class="closeBtn">
        <img src="../../assets/images/closeBtn.svg" alt="" @click="hideMenu" />
      </button>
      <ul>
        <li>
          <router-link to="/">startsidan</router-link>
        </li>
        <li>
          <router-link to="/courses">våra kurser</router-link>
        </li>
        <li>
          <router-link to="/contact">kontakta oss</router-link>
        </li>
        <li>
          <router-link to="/about">om oss</router-link>
        </li>
        <li>
          <router-link to="/lia">lia</router-link>
        </li>
        <li>
          <router-link to="/hackathon">hackathon</router-link>
        </li>
        <li>
          <router-link to="/privacypolicy">privacy policy</router-link>
        </li>
      </ul>

      <section class="buttons" v-if="uid">
        <button class="cta" @click="navToProfile">mina sidor</button>
        <button class="ghost" @click="logout">logga ut</button>
      </section>

      <section class="buttons" v-if="!uid">
        <button class="cta" @click="() => this.$router.push('/signup')">
          sign up
        </button>
        <button class="ghost" @click="() => this.$router.push('/login')">
          log in
        </button>
      </section>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    hideMenu: function() {
      this.$emit("hideMenu")
    },
    navToProfile: function() {
      this.$router.push("/profile")
    },
    logout: function() {
      this.$store.dispatch("logout")
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
.mobile-menu {
  @include flex();
  justify-content: space-between;
  padding: 2rem 0rem 0rem 0rem;
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: #181818;
  z-index: 11;
  color: #aaa;
  animation: slideIn 0.4s forwards;

  .closeBtn {
    align-self: flex-end;
    margin: 1rem 2.5rem;
    background: transparent;
    border: none;

    img {
      width: 1.2rem;
    }
  }

  ul {
    list-style: none;
    width: 100%;
    margin-bottom: auto;
    margin-top: 2rem;

    li {
      padding: 1rem 0rem;
      //background: #262626;
      width: 100%;
      text-align: center;

      a {
        color: #efefef;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 0.8rem;
        // padding: 2rem;
        width: 100%;
        font-family: "Montserrat", sans-serif;
      }
    }
  }

  .buttons {
    width: 100%;
    @include flex();
    font-size: 0.9rem;
    background: #0002;
    padding: 3rem 0rem;

    .cta {
      @include btn();
      padding: 0.8rem 7rem;
      margin: 1rem 0rem 2rem 0rem;
      font-size: 0.8rem;
    }

    .ghost {
      border: none;
      background: transparent;
      color: #aaa;
      font-size: 0.9rem;
      padding: 0.8rem 7rem;
    }
  }
}

@keyframes slideIn {
  0% {
    transform: translateX(100vw);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
