<template>
  <nav id="MobilNav">
    <img
      @click="navToHome"
      src="../../assets/images/Codic-logo.svg"
      alt=""
      class="logo"
    />

    <img
      class="menu-btn"
      src="../../assets/images/menuBtn.svg"
      alt=""
      @click="showMenu"
    />
    <mobile-menu v-if="menuShown" @hideMenu="hideMenuListener" />
  </nav>
</template>

<script>
import MobileMenu from "./MobileMenu.vue"
export default {
  data: () => {
    return {
      menuShown: false,
    }
  },
  components: {
    MobileMenu,
  },
  methods: {
    navToHome: function() {
      this.$router.push("/")
    },
    hideMenuListener: function() {
      this.menuShown = false
    },
    showMenu: function() {
      this.menuShown = true
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
  background: #1c1c1c;

  img {
    cursor: pointer;
  }

  .menu-btn {
    background: transparent;
    padding: 0.5rem 2rem;
    border: none;
    transform: scale(1.4);
  }
}

@media only screen and (min-width: 1345px) {
  #MobilNav {
    display: none;
  }
}

@media only screen and (max-width: 768px) {
  #MobilNav {
    height: 4rem;
    padding: 0rem 2rem;

    .logo {
      width: 4rem;
    }

    .menu-btn {
      padding: 0.5rem;
      transform: scale(1.2);
    }
  }
}
</style>
