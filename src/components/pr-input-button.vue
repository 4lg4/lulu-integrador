<template>
  <div class="pr-input-button">
    <div class="pr-input-button__field">
      <pr-input class="pr-input-button__field__item-input" v-model="value" :label="label"></pr-input>
      <pr-button class="pr-input-button__field__item-button" @click="click" :disabled="disabled">{{ labelButton }}</pr-button>
    </div>
  </div>
</template>

<script>
import PrInput from '@/components/pr-input.vue';
import PrButton from '@/components/pr-button.vue';

export default {
  name: "pr-input-button",
  components: {PrInput, PrButton},
  props: {
    labelButton: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      value: null,
    };
  },
  computed: {
    disabled() {
      return !(this.value);
    }
  },
  methods: {
    click() {
      this.$emit('click', this.value);
    },
  },
};
</script>

<style>
  .pr-input-button {
    width: 100%;
    padding: 0 15px;
  }

  .pr-input-button__field {
    display: flex;
    width: 100%;
  }

  .pr-input-button__field__item-input {
    flex: auto;
  }

  .pr-input-button__field__item-button {
    max-width: 200px;
    min-width: 100px;
    flex: 1;
  }
</style>
