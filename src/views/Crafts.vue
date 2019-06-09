<template>
  <pr-page
    class="Crafts"
    title="Artesanatos"
  >

    <template slot="description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
    </template>

    <v-layout row wrap justify-center>
      <v-flex
        xs12 sm6 md4
        class="Crafts__card"
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
                  <span class="headline white--text Crafts__card__headline" v-text="card.title"></span>
                </v-flex>
              </v-layout>
            </v-container>
          </v-img>

          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">R$ 100,00</h3>
              <div> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam </div>
            </div>
          </v-card-title>

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
        xs12 sm6 md4
        class="Crafts__card"
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
                  <span class="headline white--text Crafts__card__headline" v-text="card.title"></span>
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
        xs12 sm6 md4
        class="Crafts__card"
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
                  <span class="headline white--text Crafts__card__headline" v-text="card.title"></span>
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
        xs12 sm6 md4
        class="Crafts__card"
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
                  <span class="headline white--text Crafts__card__headline" v-text="card.title"></span>
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
  name: 'Crafts',
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
  .Crafts__card {
    padding: 5px;
  }

  .Crafts__card__headline {
    text-shadow: 2px 2px 3px #000000;
  }
</style>
