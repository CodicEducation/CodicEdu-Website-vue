<template>
  <section class="list-item" @click="selectItem">
    <p>-</p>
    <p class="video-name">{{ item.vidName }}</p>

    <article>
      <img src="../../assets/images/duration.svg" alt="" />
      <p class="length">{{ item.vidLength }}</p>
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
  props: {
    item: Object,
    index: Number,
  },
  methods: {
    selectItem: function() {
      let items = document.getElementsByClassName("list-item")
      let i = this.index
      items.forEach((item) => {
        item.classList.remove("white")
      })
      items[i].classList.add("white")

      this.saveVideo()
      this.saveVideoForUser()
    },

    saveVideo: function() {
      this.$store.dispatch("saveCurrentVid", this.item.vidLink)
    },

    saveVideoForUser: function() {
      let uid = this.$store.state.uid
      let data = { vid: this.item, uid: uid }
      this.$store.dispatch("saveVideoUser", data)
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/globalStyles.scss";
.list-item {
  background: #0002;
  width: 100%;
  @include flex();
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 3rem;
  margin-bottom: 0.4rem;
  color: #777;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.4s ease;

  &:hover {
    background: #0008;
    color: #f2f2f2;
    transform: translateY(0.1rem);
  }

  .video-name {
    margin-right: auto;
    margin-left: 1rem;
    text-align: left;
    max-width: 30ch;
    line-height: 1.6rem;
  }

  article {
    width: 4.5rem;
    @include flex();
    flex-direction: row;
    justify-content: space-between;
    color: #888;

    .length {
      font-family: "Rajdhani", sans-serif;
      font-size: 1rem;
    }
  }
}

.white {
  background: #0006;
  color: #ddd;

  article {
    .length {
      color: #ddd;
    }
  }
}

// Mobile devices

@media only screen and (max-width: 768px) {
  .list-item {
    padding: 1.8rem 1rem;
    color: #aaa;

    .video-name {
      font-size: 0.8rem;
      max-width: 60%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      &:hover {
        white-space: initial;
      }
    }
    article {
      width: 3.6rem;
      img {
        width: 0.9rem;
      }
    }
  }
}
</style>
