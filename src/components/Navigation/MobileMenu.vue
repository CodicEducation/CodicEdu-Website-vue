<template>
  <transition name="slidIn" mode="in-out">
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
      </ul>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    hideMenu: function() {
      this.$emit("hideMenu")
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/globalStyles.scss";
.mobile-menu {
  @include flex();
  justify-content: flex-start;
  padding: 2.3rem 0rem;
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: #222;
  z-index: 11;
  color: #aaa;

  .closeBtn {
    align-self: flex-end;
    margin: 0rem 2.5rem;
    background: transparent;
    border: none;

    img {
      width: 1.2rem;
    }
  }
}
</style>
