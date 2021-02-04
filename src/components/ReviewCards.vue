<template>
  <div class="rev-card">
    <p class="rev-txt">
      {{ review }}
    </p>
    <p class="rev-info">{{ reviewer }}</p>
  </div>
</template>

<script>
export default {
  props: {
    review: String,
    reviewer: String,
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/globalStyles.scss";
.rev-card {
  background: #ffffff06;
  max-width: 40rem;
  height: 20rem;
  margin: 2rem;
  padding: 3rem;
  @include flex();
  justify-content: space-between;
  align-items: flex-start;
  text-align: left;
  border-radius: 12px;
  transform: translateY(-0.2rem);
  box-shadow: 0px 10px 8px #0002;
  border-top: 2px solid $main-color;

  .rev-txt {
    line-height: 1.8rem;
    color: #eee;
  }

  .rev-info {
    font-size: 0.9rem;
    color: #999;
  }

  &:hover {
    transform: translateY(0rem);
    box-shadow: none;
  }
}

@media only screen and (max-width: 768px) {
  .rev-card {
    height: initial;
    padding: 2rem;
    margin: 2rem 0rem;

    .rev-info {
      margin: 2rem 0rem;
    }
  }
}
</style>
