<template>
  <div class="profile">
    <disk-nav />
    <mobile-navbar />

    <main>
      <section class="user-info">
        <div class="content">
          <div class="img">
            <img :src="user.imageUrl" alt="" />
          </div>
          <h1>{{ user.name }}</h1>
          <p>
            {{ user.email }}
          </p>
          <input
            name="file"
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            @change="uploadImg"
          />
        </div>
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

  methods: {
    uploadImg: function(e) {
      let file = e.target.files[0]
      let data = {
        file: file,
        uid: this.uid,
      }
      this.$store.dispatch("uploadImg", data)
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/globalStyles.scss";
.profile {
  @include flex();
  justify-content: space-between;
  width: 100vw;
  min-height: 100vh;
  background: #222;

  main {
    position: relative;
    width: 100%;
    height: 90vh;
    color: #eee;
    @include flex();
    justify-content: space-between;
    flex-direction: row;

    .user-info {
      width: 50%;
      height: 80vh;
      @include flex();
      justify-content: flex-start;
      padding: 2rem 0rem;

      .content {
        @include flex();
        justify-content: flex-start;
        align-items: flex-start;

        .img {
          width: 18rem;
          height: 18rem;
          border-radius: 50%;
          overflow: hidden;
          margin: 4rem 0rem 2rem 0rem;

          img {
            height: 100%;
          }
        }

        h1 {
          margin: 2rem 0rem 1rem 0rem;
          text-transform: capitalize;
          font-size: 1.8rem;
        }

        p {
          color: #afafaf;
        }

        input {
          margin: 2rem 0rem;
          background: #ddd;
          height: 2.5rem;
          position: relative;
          overflow: hidden;
          border-radius: 5px;
          width: 100%;

          &::after {
            content: "Ladda upp en bild ";
            padding: 0.8rem 0rem;
            color: #222;
            font-weight: bold;
            text-align: center;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #fefefe;
            z-index: 11;
          }
        }
      }
    }

    .list {
      width: 45%;
      height: 100%;
      overflow-y: scroll;
      padding: 2rem 0rem 1rem 0rem;
    }
  }
}

@media only screen and (max-width: 768px) {
  .profile {
    main {
      height: initial;
      flex-direction: column;

      .user-info {
        width: 100%;
        height: inherit;
        margin: 1rem 0rem 4rem 0rem;
        .img {
          width: 10rem;
          height: 10rem;
        }

        h1 {
          font-size: 1.6rem;
        }

        p {
          font-size: 0.9rem;
        }
      }

      .list {
        width: 100%;
        height: 100vh;
        overflow-y: scroll;
        padding-top: 4rem;
      }
    }
  }
}
</style>
