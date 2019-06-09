<template>
  <pr-page
    class="Search"
    title="Pesquisar"
  >
    <template slot="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
    </template>

    <pr-input-button
      label="O que você está procurando"
      label-button="Pesquisar"
      @click="submit"
    >
    </pr-input-button>


    <v-layout row wrap justify-center>
      <pr-card-material
        v-for="(material, index) in search.materials"
        :key="index"
        :value="material"
        :owner="(material && material.user === user.id)"
      ></pr-card-material>
    </v-layout>

    <v-layout row wrap justify-center>
      <pr-card-craft
        v-for="(craft, index) in search.crafts"
        :key="index"
        :value="craft"
        :owner="(craft && craft.user === user.id)"
      >
      </pr-card-craft>
    </v-layout>
  </pr-page>
</template>

<script>
import PrPage from '@/components/pr-page.vue';
import PrInputButton from '@/components/pr-input-button.vue';
import PrCardMaterial from '@/components/pr-card-material.vue';
import PrCardCraft from '@/components/pr-card-craft.vue';
import {mapState} from 'vuex';

export default {
  name: 'Search',
  components: {PrPage, PrInputButton, PrCardMaterial, PrCardCraft},
  computed: {
    ...mapState(['search', 'user']),
  },
  methods: {
    submit(query) {
      this.$store.dispatch('search', query);
    },
  },
};
</script>

<style scoped>
  .Search {
    text-align: center;
  }
</style>
