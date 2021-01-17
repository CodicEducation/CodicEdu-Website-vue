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
</style>
