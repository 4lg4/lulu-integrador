<template>
  <pr-page
    class="Material"
    title="Cadastro"
  >
    <v-radio-group v-model="form.type" row>
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

    <pr-input v-model="form.price" label="Valor"></pr-input>
    <pr-input v-model="form.title" label="Título"></pr-input>
    <pr-input v-model="form.image" label="Url da imagem" v-if="form.type === 'artesanato'"></pr-input>
    <pr-input v-model="form.description" label="Descrição" textarea></pr-input>

    <v-select
      :items="districts"
      v-model="form.district"
      label="Bairro"
    ></v-select>

    <pr-input v-model="form.contact" label="Contato"></pr-input>

    <v-select
      v-if="form.type === 'material'"
      :items="materials"
      v-model="form.material"
      label="Material"
    ></v-select>

    <pr-button @click="submit" :disabled="valid">Cadastrar</pr-button>
  </pr-page>
</template>

<script>
import districts from '@/collections/poa-bairros.json';
import PrPage from '@/components/pr-page.vue';
import PrInput from '@/components/pr-input.vue';
import PrButton from '@/components/pr-button.vue';
import {mapActions, mapState} from 'vuex';

export default {
  name: 'Material',
  components: {PrPage, PrInput, PrButton},
  data() {
    return {
      form: {
        type: 'artesanato',
        price: 0,
        description: null,
        district: null,
        contact: null,
        material: null,
        title: null,
        image: null,
      },

      materials: ['plástico', 'papel', 'metal', 'vidro'],
      districts,
    };
  },
  computed: {
    ...mapState(['user']),
    valid() {
      if (this.form.type === 'material') {
        return !(this.form.description && this.form.district && this.form.contact && this.form.material && this.form.title);
      }

      return !(this.form.description && this.form.district && this.form.contact && this.form.image && this.form.title);
    },
  },
  methods: {
    async submit() {
      this.error = false;

      const form = Object.assign({}, this.form, {user: this.user.id});

      try {
        if (this.form.type === 'material') {
          await this.materialCreate(form);
        } else {
          await this.craftCreate(form);
        }

        this.$router.push({name: 'MyMaterials'});
      } catch (e) {
        this.error = true;
        return true;
      }
    },

    ...mapActions(['materialCreate', 'craftCreate']),
  },
};
</script>

<style scoped>
  .Material {
  }
</style>


