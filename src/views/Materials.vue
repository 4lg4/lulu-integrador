<template>
  <pr-page
    class="Materials"
    title="Materials"
  >

    <template slot="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
    </template>

    <v-layout row wrap justify-center>
      <pr-card-material
        v-for="(material, index) in materials"
        :key="index"
        :value="material"
      ></pr-card-material>
    </v-layout>
  </pr-page>
</template>

<script>
  import PrPage from '@/components/pr-page.vue';
  import PrCardMaterial from '@/components/pr-card-material.vue';
  import {mapState} from 'vuex';

export default {
  name: 'Materials',
  components: {PrPage, PrCardMaterial},
  computed: {
    ...mapState(['materials']),
  },
  created() {
    // get list of materials
    this.$store.dispatch('materials');
  }
};
</script>
