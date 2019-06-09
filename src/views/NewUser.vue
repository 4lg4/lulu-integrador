<template>
  <pr-page
    class="NewUser"
    title="Criar novo usuário"
  >

    <pr-input v-model="email" label="Usuário"></pr-input>
    <pr-input v-model="password" label="Senha"></pr-input>
    <pr-input v-model="confirmPassword" label="Confirmar Senha"></pr-input>

    <pr-button @click="submit">Cadastrar</pr-button>
  </pr-page>
</template>

<style scoped>
  .Search {
    text-align: center;
    width: 100%;
  }

  .Search__field {
    display: flex;
    width: 80%;
    margin: 0 auto;
  }
</style>

<script>
  import PrPage from '@/components/pr-page.vue';
  import PrInput from '@/components/pr-input.vue';
  import PrButton from '@/components/pr-button.vue';

export default {
  name: 'NewUser',
  components: {PrPage, PrInput, PrButton},
  data() {
    return {
      email: null,
      confirmPassword: null,
      password: null,
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
