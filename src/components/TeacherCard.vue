<template>
  <div class="teacher-card">
    <img
      class="contactImg"
      :src="require(`../assets/images/workers/${fullName}.png`)"
      alt=""
    />
    <section class="contact-info">
      <h4>{{ fullName }}</h4>
      <p class="title">{{ title }}</p>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    fullName: String,
    title: String,
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
.teacher-card {
  @include flex();
  justify-content: space-around;
  background: #ffffff06;
  width: 18rem;
  height: 26rem;
  margin: 2rem 1rem;
  padding: 2rem;
  border-radius: 12px;

  img {
    max-width: 9rem;
  }

  .contact-info {
    width: 100%;
    @include flex();
    justify-content: center;

    h4 {
      margin-bottom: 1rem;
    }

    p {
      font-size: 0.9rem;
      margin: 0.2rem 0rem;
      color: #aaa;
    }
  }
}
</style>
