<template>
  <div class="liaInfo">
    <img :src="url" alt="" />
    <p>{{ txt }}</p>
  </div>
</template>

<script>
export default {
  props: {
    url: String,
    txt: String,
  },
}
</script>

<style></style>
