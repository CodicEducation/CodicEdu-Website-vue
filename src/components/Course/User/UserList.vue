<template>
  <div class="playlist">
    <section class="list-title">
      <h3>recently played</h3>
    </section>
    <user-list-item v-for="item in playlist" :key="item.id" :item="item" />
  </div>
</template>

<script>
import UserListItem from "./UserListItem.vue"
export default {
  components: {
    UserListItem,
  },
  created() {
    this.$store.dispatch("getUserPlaylist", this.$store.state.uid)
  },
  computed: {
    playlist() {
      return this.$store.state.playedVideos
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/globalStyles.scss";
.playlist {
  width: 100%;
  //background: #0002;
  height: 100%;

  .list-title {
    background: #141414;
    width: 100%;
    padding: 2.5rem 14%;
    margin-bottom: 0.4rem;
    color: #eee;
    font-size: 0.9rem;
    text-transform: capitalize;
    text-align: left;
  }

  &::-webkit-scrollbar {
    border-radius: 10px;
    width: 8px;
    background: #0002;
    width: 0.8rem;
  }

  &::-webkit-scrollbar-thumb {
    background: #0006;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
}

@media only screen and (max-width: 768px) {
  .playlist {
    .list-title {
      padding: 2.5rem 2rem;
    }
  }
}
</style>
