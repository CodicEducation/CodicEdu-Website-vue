<template>
  <div class="lia-card">
    <h4>{{ fullName }}</h4>

    <img
      class="contactImg"
      :src="require(`../assets/images/liaStudents/${fullName}.png`)"
      alt=""
    />
    <section class="contact-info">
      <p class="contact-title">Färdigheter</p>
      <p class="title">{{ title }}</p>
      <p class="contact-title" v-if="desc">uppgift</p>
      <p v-if="desc">{{ desc }}</p>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    fullName: String,
    title: String,
    desc: String,
  },
  mounted() {
    console.log(document.getElementsByClassName("contactImg"))
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
.lia-card {
  @include flex();
  justify-content: space-between;
  background: #ffffff06;
  width: 20rem;
  height: 28rem;
  margin: 2rem 1rem;
  border-radius: 12px;

  h4 {
    width: 100%;
    background: #fff1;
    padding: 1rem 2rem;
  }

  img {
    max-width: 9rem;
    //margin: 2rem 0rem;
  }

  .contact-info {
    width: 100%;
    max-height: 50%;
    min-height: 38%;

    @include flex();
    justify-content: flex-start;
    padding: 1rem 2rem;
    background: #ffffff06;

    .contact-title {
      color: #888;
      margin: 0.8rem 0rem 0.2rem 0rem;
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
}
</style>
