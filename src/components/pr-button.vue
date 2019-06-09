<template>
  <v-btn
    class="pr-button"
    :disabled="disabled"
    @click="click"
    color="light-green lighten-3"
    large
  >
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name: "pr-button",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>
