<template>
  <div class="lia">
    <disk-nav />
    <mobile-navbar />

    <main>
      <h2>Vad innebär det att utföra LIA hos codic</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae possimus
        laudantium libero qui cupiditate ut ea commodi nam animi repellat!
      </p>
    </main>

    <Footer />
  </div>
</template>

<script>
import DiskNav from "../components/Navigation/DiskNavbar.vue"
import MobileNavbar from "../components/Navigation/MobileNavbar.vue"

import Footer from "../components/Footer/Footer.vue"
export default {
  components: {
    DiskNav,
    MobileNavbar,
    Footer,
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/globalStyles.scss";

.lia {
  @include flex();
  justify-content: space-between;

  h2 {
    color: $main-color;
    text-transform: uppercase;
    margin: 1.5rem 0rem;
  }

  p {
    color: #aaa;
    line-height: 1.8rem;
  }

  main {
    min-height: 100vh;
    width: 100%;
    padding: 4rem;

    @include flex();
    align-items: flex-start;
    justify-content: flex-start;
  }
}
</style>
