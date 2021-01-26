<template>
  <div class="pop-course">
    <section class="img">
      <img :src="course.imgUrl" alt="" />
    </section>
    <section class="info">
      <h4>{{ course.fullName }}</h4>
      <p>
        {{ course.description }}
      </p>
    </section>
    <button class="cta" @click="openCourse">till kursen</button>
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
.pop-course {
  position: relative;
  width: 20rem;
  height: 24rem;
  background: #f2f2f2;
  border-radius: 6px;
  @include flex();
  justify-content: space-between;
  margin: 2rem 2rem;
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(0.6rem);
  }

  .img {
    height: 40%;
    width: 100%;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    overflow: hidden;
    @include flex();

    img {
      width: 100%;
      height: 100%;
      transform: translateY(-1.1rem);
    }
  }

  .info {
    padding: 0rem 2rem;
    text-align: left;
    h4 {
      color: #222;
    }
    p {
      color: #666;
      margin: 0.8rem 0rem;
      font-size: 0.9rem;
      line-height: 1.4rem;
    }
  }

  .cta {
    margin-bottom: 2rem;
    padding: 0.6rem;
    @include btn();
    border-radius: 3px;
    font-size: 0.8rem;
    width: 80%;
  }
}

// Smaller screens

@media only screen and (max-width: 1030px) {
  .pop-course {
    width: 18rem;
    height: 20rem;
    margin: 2rem 1rem;

    .cta {
      margin-bottom: 2rem;
      padding: 0.6rem;
      @include btn();
      border-radius: 5px;
      font-size: 0.7rem;
      width: 80%;
    }
  }
}

// Mobile devices

@media only screen and (max-width: 768px) {
  .pop-course {
    width: 16rem;
    height: 19rem;
    margin: 2rem 0rem;

    .info {
      padding: 0rem 1.4rem;
      text-align: left;

      p {
        color: #666;
        margin: 0.8rem 0rem;
        font-size: 0.8rem;
        line-height: 1.4rem;
        margin: initial;
        margin-top: 0.8rem;
      }
    }

    .cta {
      margin-bottom: 2rem;
      width: 86%;
      font-size: 0.68rem;
      padding: 0.55rem;
      margin-bottom: 1.4rem;
    }
  }
}
@media only screen and (min-width: 414px) {
  .pop-course {
    margin: 2rem 1rem;
  }
}
</style>
