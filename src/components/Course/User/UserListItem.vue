<template>
  <section class="list-item">
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
  background: #0001;
  width: 100%;
  height: 4.7rem;
  @include flex();
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 0.8rem;
  color: #888;
  font-size: 0.9rem;
  padding: 3rem 4rem;
  border-radius: 5px;

  .video-name {
    margin-right: auto;
    margin-left: 1rem;
    text-align: left;
    line-height: 1.6rem;
    max-width: 60%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  article {
    height: 100%;
    width: 8rem;
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

  &:hover {
    background: #0003;
    transform: translateY(-0.2rem);
    box-shadow: 0px 8px 12px #0001;
  }
}

@media only screen and (max-width: 768px) {
  .list-item {
    padding: 0rem 2rem;
    overflow: hidden;

    .video-name {
      max-width: 50%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-left: initial;
    }

    article {
      width: 5rem;
      button {
        padding: 0.4rem 0.8rem;
        margin-left: 1rem;
      }
    }
  }
}
</style>
