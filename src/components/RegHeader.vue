<template>
  <header>
    <h1>välkommen till <span>codic</span> Education</h1>
    <p>
      Hos oss får du möjligheten att utveckla dina kunskaper inom programmering
      gratis!
    </p>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import "../assets/styles/globalStyles.scss";

header {
  width: 100%;
  @include flex();
  h1 {
    &::first-letter {
      text-transform: uppercase;
    }
    span {
      text-transform: uppercase;
      color: $main-color;
    }
  }
  p {
    width: 46ch;
    margin-top: 2rem;
    line-height: 1.8rem;
    color: #aaa;

    &::first-letter {
      text-transform: capitalize;
    }
  }
}

@media only screen and (max-width: 540px) {
  header {
    h1 {
      font-size: 1.2rem;
    }
    p {
      width: 36ch;
      font-size: 0.9rem;
      margin-top: 1rem;
      line-height: 1.4rem;
    }
  }
}
</style>
