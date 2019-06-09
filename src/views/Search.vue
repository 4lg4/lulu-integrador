<template>
  <pr-page
    class="Search"
    title="Pesquisar"
  >
    <template slot="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
    </template>

    <pr-input-button
      v-model="search"
      label="O que você está procurando"
      label-button="Pesquisar"
      @click="submit"
    >
    </pr-input-button>
  </pr-page>
</template>

<script>
import PrPage from '@/components/pr-page.vue';
import PrInputButton from '@/components/pr-input-button.vue';

export default {
  name: 'Login',
  components: {PrPage, PrInputButton},
  data() {
    return {
      search: null,
    };
  },
  computed: {
    valid() {
      return (this.search);
    },
  },
  methods: {
    submit() {
      console.log('submit', this.$data);
    },
    emailRules() {},
    passwordRules() {},
  },
};
</script>

<style scoped>
  .Search {
    text-align: center;
  }
</style>
