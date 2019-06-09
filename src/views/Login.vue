<template>
  <pr-page
    class="Login"
    title="Entrar"
  >
    <template slot="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
    </template>

    <div class="Login__field">
      <pr-input v-model="form.email" label="E-mail"></pr-input>
      <pr-input v-model="form.password" label="Senha"></pr-input>

      <br>

      <pr-button @click="submit" :disabled="valid">Entrar</pr-button>
    </div>

    <br><br>

    <a href="#/usuarios/cadastrar" class="green--text">Quero me cadastrar</a>


    <v-snackbar
      v-model="error"
      color="error"
      multi-line
      :timeout="5000"
    >
      {{ errorMessage }}
      <v-btn
        dark
        flat
        @click="error = false"
      >
        Close
      </v-btn>
    </v-snackbar>
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
import {mapActions} from 'vuex';

export default {
  name: 'Login',
  components: {PrPage, PrInput, PrButton},
  data() {
    return {
      form: {
        email: null,
        password: null,
      },
      errorMessage: 'Credenciais Inválidas',
      error: false,
      isPwd: true,
    };
  },
  computed: {
    valid() {
      return !(this.form.email && this.form.password);
    },
  },
  methods: {
    async submit() {
      this.error = false;
      const logged = await this.login(this.form);

      if (!logged) {
        this.error = true;
        return true;
      }

      this.$router.push({name: 'MyMaterials'});
    },

    ...mapActions(['login']),
  },
};
</script>
