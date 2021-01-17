<template>
  <section class="list-item">
    <p>-</p>
    <p class="video-name">{{ item.vidName }}</p>
    <article>
      <p class="length">{{ item.vidLength }}</p>
      <button @click="navToCourse">
        <img src="../../../assets/images/playing.svg" alt="" />
      </button>
    </article>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      playing: true,
    }
  },
  methods: {
    navToCourse() {
      this.$router.push("/course")
      this.$store.dispatch("playUservid", this.item.vidLink)
    },
  },
  props: {
    item: Object,
  },
}
</script>

<style lang="scss" scoped>
@import "../../../assets/styles/globalStyles.scss";
.list-item {
  background: #0002;
  width: 100%;
  height: 4.7rem;
  @include flex();
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.4rem;
  color: #888;
  font-size: 0.9rem;
  padding: 0rem 14%;

  .video-name {
    margin-right: auto;
    margin-left: 1rem;
  }

  article {
    height: 100%;
    width: 14%;
    @include flex();
    flex-direction: row;
    justify-content: space-between;
    color: #888;
    font-family: "Rajdhani", sans-serif;

    .length {
      font-size: 1rem;
      font-weight: bold;
    }

    button {
      padding: 0.4rem 2rem;
      background: $main-color;
      border-radius: 4px;
      border: none;
      color: #eee;
      cursor: pointer;
    }
  }
}
</style>
