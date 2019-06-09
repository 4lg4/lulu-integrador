<template>
  <pr-page
    class="Material"
    title="Cadastro"
  >
    <v-radio-group v-model="type" row>
      <v-radio
        label="Artesanato"
        value="artesanato"
        color="light-green darken-1"
      ></v-radio>
      <v-radio
        label="Material para doação"
        value="material"
        color="light-green darken-1"
      ></v-radio>
    </v-radio-group>

    <pr-input v-model="price" label="Valor"></pr-input>
    <pr-input v-model="title" label="Título"></pr-input>
    <pr-input v-model="description" label="Descrição" textarea></pr-input>

    <v-select
      :items="districts"
      v-model="district"
      label="Bairro"
    ></v-select>

    <pr-input v-model="contact" label="Contato"></pr-input>

    <v-select
      v-if="type === 'material'"
      :items="materials"
      v-model="material"
      label="Material"
    ></v-select>

    <pr-button @click="submit">Cadastrar</pr-button>
  </pr-page>
</template>

<script>
import districts from '@/collections/poa-bairros.json';
import PrPage from '@/components/pr-page.vue';
import PrInput from '@/components/pr-input.vue';
import PrButton from '@/components/pr-button.vue';

export default {
  name: 'Material',
  components: {PrPage, PrInput, PrButton},
  data() {
    return {
      type: 'artesanato',
      price: 0,
      description: null,
      district: null,

      contact: null,
      material: null,
      title: null,

      materials: ['plástico', 'papel', 'metal', 'vidro'],
      districts,
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
  .Material {
  }
</style>


