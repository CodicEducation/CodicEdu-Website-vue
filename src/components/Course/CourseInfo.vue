<template>
  <div class="course-in-courses">
    <div class="img">
      <img :src="course.imgUrl" alt="" />
    </div>
    <div class="info">
      <h3>{{ course.fullName }}</h3>
      <p>
        {{ course.description }}
      </p>
      <p class="lessons">
        videos: <span> {{ course.lessons }}</span>
      </p>
      <p class="lang">
        språk: <span> {{ course.lang }} </span>
      </p>

      <button @click="openCourse">till kursen</button>
    </div>
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
  overflow: hidden;
  width: 22rem;
  min-height: 25rem;
  @include flex();
  justify-content: space-between;
  align-items: center;
  text-align: left;
  margin: 2rem 2rem;
  border-bottom: 8px solid #fff1;
  transition: all 0.4s ease;
  background: #efefef;
  border-radius: 6px;

  background: #f2f2f2;

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0px 12px 16px #1118;
  }

  .img {
    width: 100%;
    height: 10rem;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  .info {
    padding: 0rem 2rem;
    height: 50%;
    margin-top: 2rem;
    @include flex();
    align-items: flex-start;
    justify-content: space-between;

    h3 {
      color: #eee;
      color: #222;
      text-transform: capitalize;
    }

    p {
      line-height: 1.6rem;
      font-size: 0.86rem;
      color: #888;
      margin: 0.5rem 0rem;
    }

    .lessons,
    .lang {
      margin: 0rem;
      color: #222;
      margin-top: 0.4rem;
      text-transform: capitalize;
      //background: #0002;
      width: 100%;

      span {
        margin: 0rem 1rem;
      }
    }

    .lessons {
      padding-top: 0rem;
    }

    .lang {
      margin-top: 0rem;
      padding-bottom: 0.4rem;
    }

    button {
      margin: 1rem 0rem;
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
}

@media only screen and (max-width: 768px) {
  .course-in-courses {
    width: 16rem;
    height: 19rem;
    min-height: initial;
    margin: 4rem 1rem;
    flex: 0 0 auto;
    //justify-content: center;

    .img {
      height: 8rem;
    }

    .info {
      height: 56%;
      margin-top: 0rem;
      padding: 0rem 1rem;
      h3 {
        font-size: 0.8rem;
        margin-top: 1.5rem;
      }

      p {
        font-size: 0.7rem;
        line-height: 1.2rem;
        margin: 0.4rem 0rem;
      }

      .lessons,
      .lang {
        display: none;
      }

      button {
        margin: 1rem 0rem;
        padding: 0.4rem;
      }
    }
  }
}
</style>
