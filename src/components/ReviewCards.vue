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
  max-width: 44rem;
  height: 20rem;
  margin: 2rem;
  padding: 3rem;
  @include flex();
  justify-content: space-between;
  align-items: flex-start;
  text-align: left;
  border-radius: 12px;

  .rev-txt {
    line-height: 1.8rem;
    color: #eee;
  }

  .rev-info {
    font-size: 0.9rem;
    color: #999;
  }
}
</style>
