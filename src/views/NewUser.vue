<template>
  <pr-page
    class="NewUser"
    title="Criar novo usuário"
  >

    <pr-input v-model="form.email" label="Email"></pr-input>
    <pr-input v-model="form.firstName" label="Nome"></pr-input>
    <pr-input v-model="form.password" label="Senha"></pr-input>
    <pr-input v-model="form.confirmPassword" label="Confirmar Senha"></pr-input>

    <pr-button @click="submit" :disabled="valid">Cadastrar</pr-button>

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

<script>
  import PrPage from '@/components/pr-page.vue';
  import PrInput from '@/components/pr-input.vue';
  import PrButton from '@/components/pr-button.vue';
  import {mapActions} from 'vuex';

export default {
  name: 'NewUser',
  components: {PrPage, PrInput, PrButton},
  data() {
    return {
      form: {
        email: null,
        confirmPassword: null,
        password: null,
      },

      errorMessage: 'Usuário existente',
      error: false,
    };
  },
  computed: {
    valid() {
      return !(this.form.email && this.form.firstName && this.form.password && this.form.confirmPassword && (this.form.password === this.form.confirmPassword));
    },
  },
  methods: {
    async submit() {
      this.error = false;

      try {
        await this.userCreate(this.form);
        this.$router.push({name: 'MyMaterials'});
      } catch (e) {
        this.error = true;
        return true;
      }
    },

    ...mapActions(['userCreate']),
  },
};
</script>
