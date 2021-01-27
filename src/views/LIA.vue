<template>
  <div class="lia">
    <disk-nav />
    <mobile-navbar />

    <main>
      <h1>This is the lia page</h1>
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

<style></style>
