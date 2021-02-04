<template>
  <div class="teacher-card">
    <img
      class="contactImg"
      :src="require(`../assets/images/teachers/${fullName}.png`)"
      alt=""
    />
    <section class="contact-info">
      <h4>{{ fullName }}</h4>
      <div class="footer">
        <p class="contact-title">Färdigheter</p>
        <p class="title">{{ title }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    fullName: String,
    title: String,
  },

  data: () => {
    return {
      name: "MariaBryl",
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/globalStyles.scss";
.teacher-card {
  @include flex();
  justify-content: space-between;
  background: #ffffff06;
  width: 18rem;
  height: 26rem;
  margin: 2rem 1rem;
  border-radius: 12px;

  img {
    max-width: 9rem;
    margin: 4rem 0rem 1rem 0rem;
  }

  .contact-info {
    width: 100%;
    height: 50%;
    @include flex();
    justify-content: space-between;

    h4 {
      margin-bottom: 1rem;
    }

    .contact-title {
      color: #888;
      margin-bottom: 0.4rem;
    }

    p {
      font-size: 0.9rem;
      margin: 0.2rem 0rem;
      color: #e2e2e2;
      align-self: flex-start;
      text-align: left;

      &::first-letter {
        text-transform: uppercase;
      }
    }

    .footer {
      width: 100%;
      height: 70%;
      background: #ffffff06;
      @include flex();
      align-items: flex-start;
      justify-content: flex-start;
      padding: 1.4rem;
    }
  }
}

@media only screen and (max-width: 768px) {
  .teacher-card {
  }
}
</style>
