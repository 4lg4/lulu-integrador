<template>
  <pr-page
    class="Materials"
    title="Materials"
  >

    <template slot="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
    </template>

    <v-layout row wrap justify-center>
      <v-flex
        xs12 sm5 md3
        class="Materials__card"
      >

        <v-card>
          <v-img
            :src="imgVidro"
            height="200px"
          >
            <v-container
              fill-height
              fluid
              pa-2
            >
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline white--text" v-text="card.title"></span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>favorite</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>bookmark</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>share</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>

      </v-flex>



      <v-flex
        xs12 sm5 md3
        class="Materials__card"
      >

        <v-card>
          <v-img
            :src="imgPlastico"
            height="200px"
          >
            <v-container
              fill-height
              fluid
              pa-2
            >
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline white--text" v-text="card.title"></span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>favorite</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>bookmark</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>share</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>

      </v-flex>


      <v-flex
        xs12 sm5 md3
        class="Materials__card"
      >

        <v-card>
          <v-img
            :src="imgPapel"
            height="200px"
          >
            <v-container
              fill-height
              fluid
              pa-2
            >
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline white--text" v-text="card.title"></span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>favorite</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>bookmark</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>share</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>

      </v-flex>


      <v-flex
        xs12 sm5 md3
        class="Materials__card"
      >

        <v-card>
          <v-img
            :src="imgMetal"
            height="200px"
          >
            <v-container
              fill-height
              fluid
              pa-2
            >
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline white--text" v-text="card.title"></span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>favorite</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>bookmark</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>share</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>

      </v-flex>
    </v-layout>
  </pr-page>
</template>

<script>
  import imgVidro from '@/assets/vidro.jpg';
  import imgPlastico from '@/assets/plastico.jpg';
  import imgPapel from '@/assets/papel.jpg';
  import imgMetal from '@/assets/metal.jpg';
  import PrPage from '@/components/pr-page.vue';
  import PrInput from '@/components/pr-input.vue';
  import PrButton from '@/components/pr-button.vue';

export default {
  name: 'Materials',
  components: {PrPage, PrInput, PrButton},
  data() {
    return {
      imgVidro,
      imgPlastico,
      imgPapel,
      imgMetal,

      type: 'artesanato',
      price: 0,
      description: null,
      district: null,
      contact: null,
      material: null,
      title: null,

      card: { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
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
  .Materials__card {
    padding: 5px;
  }
</style>
