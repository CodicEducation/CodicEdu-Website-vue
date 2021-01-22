<template>
  <div class="card">
    <img
      class="contactImg"
      :src="require(`../assets/images/contactPersons/${fullName}.png`)"
      alt=""
    />
    <section class="contact-info">
      <h3>{{ fullName }}</h3>
      <p class="title">{{ title }}</p>
      <p class="email">{{ email }}</p>
      <p class="number">{{ number }}</p>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    fullName: String,
    email: String,
    number: String,
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
.card {
  @include flex();
  background: #ffffff06;
  width: 23rem;
  height: 29rem;
  margin: 2rem;
  padding: 2rem;
  border-radius: 12px;

  img {
    max-width: 10rem;
  }

  .contact-info {
    height: 50%;
    width: 100%;
    @include flex();
    justify-content: flex-end;

    h3 {
      margin-bottom: 1rem;
    }

    p {
      font-size: 0.9rem;
      margin: 0.4rem 0rem;
      color: #aaa;
    }
  }

  &:hover {
    transform: translateY(-0.5rem);
    box-shadow: 0px 14px 20px #0003;
  }
}
</style>
