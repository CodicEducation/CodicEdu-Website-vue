<template>
  <div class="playlist">
    <list-item
      v-for="(item, index) in playlist"
      :key="item.id"
      :item="item"
      :index="index"
    />
  </div>
</template>

<script>
import ListItem from "./ListItem.vue"
export default {
  components: {
    ListItem,
  },
  computed: {
    playlist() {
      return this.$store.state.CourseVideos
    },
  },
  created() {
    let course = this.$store.state.courseSlected
    if (!course) {
      course = JSON.parse(localStorage.getItem("courseSelected"))
    }
    this.$store.dispatch("getCourse", course.name)
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/globalStyles.scss";
.playlist {
  background: #141414;
  height: 100%;
  @include flex();
  justify-content: flex-start;
  margin-right: 1.1rem;
  border-left: 5px solid #fff1;
  overflow-y: scroll;
  padding: 0rem 0.4rem;

  &::-webkit-scrollbar {
    border-radius: 10px;
    width: 8px;
    background: #fffe;
  }

  &::-webkit-scrollbar-thumb {
    background: #0006;
    border-radius: 2px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 2px;
    background: #0006;
  }
}

@media only screen and (max-width: 1250px) {
  .playlist {
    margin-right: 0rem;
    height: initial;
    max-height: 100vh;

    &::-webkit-scrollbar {
      border-radius: 0px;
      width: 5px;
      background: #fffe;
    }

    &::-webkit-scrollbar-thumb {
      background: #0006;
      border-radius: 0px;
    }

    &::-webkit-scrollbar-track {
      background: #0006;
    }
  }
}
</style>
