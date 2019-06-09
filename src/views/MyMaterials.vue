<template>
  <pr-page
    class="MyMaterials"
    title="Minha reciclagem"
  >

    <template slot="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
    </template>

    <v-layout row wrap justify-center>
      <pr-card-material
        v-for="(material, index) in materials"
        :key="index"
        :value="material"
        owner
      ></pr-card-material>
    </v-layout>

    <v-layout row wrap justify-center>
      <pr-card-craft
        v-for="(craft, index) in crafts"
        :key="index"
        :value="craft"
        owner
      >
      </pr-card-craft>
    </v-layout>
  </pr-page>
</template>

<script>
  import PrPage from '@/components/pr-page.vue';
  import PrCardMaterial from '@/components/pr-card-material.vue';
  import PrCardCraft from '@/components/pr-card-craft.vue';
  import {mapState} from 'vuex';

export default {
  name: 'Materials',
  components: {PrPage, PrCardMaterial, PrCardCraft},
  computed: {
    ...mapState(['materials', 'crafts', 'user']),
  },
  created() {
    // get list of materials
    this.$store.dispatch('materials', {user: this.user});

    // get list of crafts
    this.$store.dispatch('crafts', {user: this.user});
  }
};
</script>
