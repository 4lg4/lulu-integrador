<template>
  <pr-page
    class="Login"
    title="Entrar"
  >
    <template slot="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
    </template>

    <div class="Login__field">
      <pr-input v-model="email" label="E-mail"></pr-input>
      <pr-input v-model="password" label="Senha"></pr-input>

      <br>

      <pr-button @click="submit">Entrar</pr-button>
    </div>

    <br><br>

    <a href="#/criar-nova-conta">Quero me cadastrar</a>
  </pr-page>
</template>

<style scoped>
  .Login {
    text-align: center;
  }

  .Login__field {
    width: 80%;
    margin: 0 auto;
  }
</style>

<script>
import PrPage from '@/components/pr-page.vue';
import PrInput from '@/components/pr-input.vue';
import PrButton from '@/components/pr-button.vue';


export default {
  name: 'Login',
  components: {PrPage, PrInput, PrButton},
  data() {
    return {
      email: null,
      password: null,
      isPwd: true,
    };
  },
  computed: {
    valid() {
      return (this.email && this.password);
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
