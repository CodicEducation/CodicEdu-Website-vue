<template>
  <div class="course-in-courses">
    <div class="img">
      <img src="../../assets/images/csharp.jpg" alt="" />
    </div>
    <h3>{{ course.fullName }}</h3>
    <p>
      {{ course.description }}
    </p>
    <p class="lessons">lessons: {{ course.lessons }}</p>
    <button @click="openCourse">till kursen</button>
  </div>
</template>

<script>
export default {
  props: {
    course: Object,
  },
  methods: {
    openCourse() {
      this.$store.dispatch("saveSelectedCourse", this.course)
      this.$router.push("/course")
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/globalStyles.scss";
.course-in-courses {
  width: 23rem;
  height: 26rem;
  @include flex();
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  margin: 4rem 2rem;
  border-bottom: 8px solid #fff1;
  transition: all 0.4s ease;
  background: #efefef;
  border-radius: 6px;
  padding: 0rem 2rem;
  //box-shadow: 0px 12px 16px #0005;
  background: #ffffff0a;

  //border: 2px solid #444;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0px 12px 16px #1118;
  }

  .img {
    width: 100%;
    height: 40%;
    overflow: hidden;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;

    img {
      width: 100%;
    }
  }

  h3 {
    margin: 0.5rem 0rem;
    margin-top: 2.6rem;
    color: #eee;
    text-transform: capitalize;
  }

  p {
    line-height: 1.6rem;
    font-size: 0.86rem;
    color: #666;
  }

  .lessons {
    color: #222;
    color: #aaa;
    margin: 0.4rem 0rem;
  }

  button {
    margin: 2rem 0rem 1rem 0rem;
    width: 100%;
    @include btn();
    padding: 0.6rem 1.4rem;
    border-radius: 5px;
    font-size: 0.7rem;

    &:hover {
      @include hover();
      transform: none;
    }
  }
}

@media only screen and (max-width: 768px) {
  .course-in-courses {
    width: 18rem;
    height: 22rem;
    padding: 0rem 1rem;
    margin: 2rem 1rem;
    flex: 0 0 auto;

    h3 {
      font-size: 1rem;
      margin-top: 1.5rem;
    }

    p {
      font-size: 0.8rem;
      line-height: 1.2rem;
      margin: 0.4rem 0rem;
    }

    .lessons {
      margin: 0.2rem 0rem;
    }

    .img {
      height: 50%;
    }

    button {
      margin: 1rem 0rem;
    }
  }
}
</style>
