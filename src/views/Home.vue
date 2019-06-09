<template>
  <pr-page
    class="Home"
    title="Home"
  >
    <template slot="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
    </template>
  </pr-page>
</template>

<script>
  import PrPage from '@/components/pr-page.vue';

  export default {
    name: 'Home',
    components: {PrPage},
  };
</script>
