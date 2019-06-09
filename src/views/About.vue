<template>
  <pr-page
    class="About"
    title="Sobre"
  >
    <template slot="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
    </template>
  </pr-page>
</template>

<script>
  import PrPage from '@/components/pr-page.vue';

export default {
  name: 'About',
  components: {PrPage},
};
</script>
