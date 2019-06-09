<template>
  <div>
    <v-text-field
      v-if="!textarea"
      v-model="localValue"
      :label="label"
      large
      v-bind="$attrs"
    ></v-text-field>

    <v-textarea
      v-if="textarea"
      v-model="localValue"
      :label="label"
      large
      v-bind="$attrs"
    ></v-textarea>
  </div>
</template>

<script>
export default {
  name: "pr-input",
  props: {
    value: {
      type: [String, Number],
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    textarea: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    localValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit('input', newValue);
      },
    },
  },
}
</script>

<style scoped>

</style>
