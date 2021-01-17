<template>
  <div class="courses-list">
    <course v-for="course in courses" :key="course.name" :course="course" />
  </div>
</template>

<script>
import Course from "./CourseInfo"
export default {
  components: {
    Course,
  },
  computed: {
    courses() {
      return this.$store.state.courses
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/globalStyles.scss";
.courses-list {
  @include flex();
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  p {
    color: #eee;
  }
}

@media only screen and (max-width: 768px) {
  .courses-list {
    width: 100vw;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    align-items: flex-start;
    justify-content: flex-start;
    align-self: flex-start;
  }
}
</style>
