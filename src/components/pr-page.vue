<template>
  <div class="pr-page">
    <h1 v-if="title" class="pr-page__title">
      <slot name="title">{{title}}</slot>
    </h1>
    <p v-if="$slots.description">
      <slot name="description"></slot>
    </p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "pr-page",
  props: {
    title: {
      type: String,
      default: null,
    },
  },
};
</script>

<style scoped>
  .pr-page {
    width: 100%;
    text-align: center;
  }
</style>
