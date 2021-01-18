<template>
  <div class="profile">
    <disk-nav />
    <mobile-navbar />

    <main>
      <section class="user-info">
        <div class="img">
          <img src="../assets/images/profileImg.svg" alt="" />
        </div>
        <h1>{{ user.name }}</h1>
        <p>
          {{ user.email }}
        </p>
      </section>

      <section class="list">
        <user-list />
      </section>
    </main>

    <Footer />
  </div>
</template>

<script>
import DiskNav from "../components/Navigation/DiskNavbar.vue"
import MobileNavbar from "../components/Navigation/MobileNavbar.vue"

import Footer from "../components/Footer/Footer.vue"
import UserList from "../components/Course/User/UserList.vue"

export default {
  name: "profile",
  components: {
    DiskNav,
    Footer,
    UserList,
    MobileNavbar,
  },
  computed: {
    uid() {
      return this.$store.state.uid
    },
    user() {
      return this.$store.state.user
    },
  },
  created() {
    this.$store.dispatch("getUser", this.uid)
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/globalStyles.scss";
.profile {
  @include flex();
  justify-content: space-between;
  width: 100%;
  min-height: 100vh;
  background: #222;

  main {
    position: relative;
    width: 100%;
    height: 100%;
    color: #eee;
    @include flex();
    justify-content: space-between;

    .user-info {
      width: 50%;
      height: 80vh;
      @include flex();
      justify-content: flex-start;

      padding: 2rem 0rem;

      .img {
        width: 20rem;
        height: 22rem;
        margin: 4rem 0rem 2rem 0rem;

        img {
          width: 100%;
        }
      }

      h1 {
        margin: 1rem 0rem;
        text-transform: capitalize;
        font-size: 1.8rem;
      }

      p {
        color: #afafaf;
      }
    }

    .list {
      width: 100%;
    }
  }
}
</style>
