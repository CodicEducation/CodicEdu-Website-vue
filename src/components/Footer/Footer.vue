<template>
  <footer>
    <h2><span>codic</span> education</h2>
    <section class="fotlinks">
      <router-link to="/contact">kontakta oss</router-link>
      <router-link to="/courses">våra kurser</router-link>
      <router-link to="/">startsidan</router-link>
      <router-link to="/about">om oss</router-link>
    </section>
    <section class="socials">
      <img src="../../assets/images/linkedIn.svg" alt="" />
      <img src="../../assets/images/instagram.svg" alt="" />
    </section>
    <section class="fotContactInfo">
      <p class="info">Codic Consulting: +46-765-519-733</p>
      <p class="info">Codic Education: +46-768-990-065</p>
      <p class="info">Email: hi@codic.se</p>
    </section>
    <p class="adress">
      Codic Consulting 13 Stora Nygatan, Göteborg, Västra Götalands län, 411 08,
      Sverige
    </p>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "../../assets/styles/globalStyles.scss";
footer {
  margin-top: auto;
  background: #161616;
  padding: 8rem 0rem;
  width: 100%;
  min-height: 30vh;
  @include flex();
  justify-content: space-between;
  color: #f2f2f2;

  h2 {
    text-transform: capitalize;
    span {
      text-transform: uppercase;
      color: $main-color;
    }
  }

  p {
    font-size: 0.8rem;
    color: #ddd;
  }

  section {
    margin: 1.5rem 0rem;
  }

  .fotlinks {
    a {
      color: #666;
      margin: 0rem 1rem;
      text-decoration: none;
      text-transform: uppercase;
      transition: all 0.4s ease;
      font-size: 0.9rem;

      &:hover {
        color: #cfcfcf;
      }
    }
  }

  .socials {
    margin: 1.5rem 0rem;
    img {
      margin: 0rem 1.5rem;
    }
  }

  .fotContactInfo {
    @include flex();
    flex-direction: row;
    p {
      margin: 0.5rem 2rem;
    }
  }
}

@media only screen and (max-width: 768px) {
  footer {
    padding: 6rem 2rem;
    h2 {
      font-size: 1.3rem;
    }
    .fotlinks {
      @include flex();

      a {
        margin: 0.3rem 0rem;
        font-size: 0.8rem;
      }
    }

    .socials {
      img {
        transform: scale(0.95);
      }
    }

    .fotContactInfo {
      flex-direction: column;
      p {
        margin: 0.3rem 2rem;
      }
    }

    .adress {
      line-height: 1.5rem;
    }
  }
}
</style>
