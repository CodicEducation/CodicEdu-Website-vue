<template>
  <nav id="nav">
    <img
      @click="navToHome"
      src="../../assets/images/Codic-logo.svg"
      alt=""
      class="logo"
    />

    <img class="menu-btn" src="../../assets/images/menuBtn.svg" alt="" />
    <mobile-menu />
  </nav>
</template>

<script>
import MobileMenu from "./MobileMenu.vue"
export default {
  data: () => {
    showMenu: false
  },
  components: {
    MobileMenu,
  },
  methods: {
    navToHome: function() {
      this.$router.push("/")
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/globalStyles.scss";
nav {
  position: relative;
  width: 100%;
  height: 6rem;
  padding: 2rem 6rem;
  @include flex();
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  img {
    cursor: pointer;
  }

  .menu-btn {
    background: transparent;
    padding: 0.5rem 2rem;
    border: none;

    img {
      transform: scale(1.2);
    }
  }
}

@media only screen and (min-width: 1250px) {
  nav {
    display: none;
  }
}

@media only screen and (max-width: 768px) {
  nav {
    padding: 2rem;

    .logo {
      width: 4rem;
    }

    .menu-btn {
      padding: 0.5rem;
    }
  }
}
</style>
