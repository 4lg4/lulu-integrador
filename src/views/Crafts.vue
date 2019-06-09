<template>
  <pr-page
    class="Crafts"
    title="Artesanatos"
  >

    <template slot="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
    </template>

    <v-layout row wrap justify-center>
      <pr-card-craft
        v-for="(craft, index) in crafts"
        :key="index"
        :value="craft"
      >
      </pr-card-craft>
    </v-layout>
  </pr-page>
</template>

<script>
  import PrPage from '@/components/pr-page.vue';
  import PrCardCraft from '@/components/pr-card-craft.vue';
  import {mapState} from 'vuex';

export default {
  name: 'Crafts',
  components: {PrPage, PrCardCraft},
  computed: {
    ...mapState(['crafts']),
  },
  created() {
    // get list of crafts
    this.$store.dispatch('crafts');
  }
};
</script>
