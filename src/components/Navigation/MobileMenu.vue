<template>
  <div class="mobile-menu">
    <button><img src="../../assets/images/closeBtn.svg" alt="" /></button>
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
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: #222;
  z-index: 11;
  color: #aaa;
}
</style>
