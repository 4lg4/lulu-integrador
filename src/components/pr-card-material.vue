<template>
  <v-flex
    xs12 sm5 md3
    class="pr-card-material"
  >

    <v-card>
      <v-img
        :src="images[value.material]"
        height="200px"
      >
        <v-container
          fill-height
          fluid
          pa-2
        >
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <span class="headline white--text pr-card-material__headline" v-text="value.title"></span>
              <br>
              <span class="white--text pr-card-material__headline" v-text="value.description"></span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-img>

      <v-card-actions>
        <span>R$ {{value.price}}</span>
        <v-spacer></v-spacer>
        <template v-if="!owner">
          <v-btn icon>
            <v-icon @click="showContact(value.contact)">phone</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon @click="toImplement">favorite</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon @click="toImplement">share</v-icon>
          </v-btn>
        </template>
        <v-btn icon v-if="owner">
          <v-icon @click="toImplement">edit</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>

    <pr-dialog
      v-model="dialogTodo"
      title="TODO"
      @click="dialogTodo = false"
    >
      <v-card-text>
        Falta implementar
      </v-card-text>
    </pr-dialog>

    <pr-dialog
      v-model="dialogContact"
      title="Dados do contato"
      @click="dialogContact = false"
    >
      <v-card-text>
        {{dialogContactText}}
      </v-card-text>
    </pr-dialog>
  </v-flex>
</template>

<script>
  import imgVidro from '@/assets/vidro.jpg';
  import imgPlastico from '@/assets/plastico.jpg';
  import imgPapel from '@/assets/papel.jpg';
  import imgMetal from '@/assets/metal.jpg';
  import PrDialog from '@/components/pr-dialog.vue';

export default {
  name: "pr-card-material",
  components: {PrDialog},
  props: {
    value: {
      type: Object,
      default: ()=> ({}),
    },
    owner: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialogContact: false,
      dialogContactText: null,
      dialogTodo: false,
      images: {
        'vidro': imgVidro,
        'plástico': imgPlastico,
        'papel': imgPapel,
        'metal': imgMetal,
      },
    };
  },
  methods: {
    toImplement() {
      this.dialogTodo = true;
    },
    showContact(contact) {
      this.dialogContactText = contact;
      this.dialogContact = true;
    },
  },
};
</script>

<style>
  .pr-card-material {
    padding: 5px;
  }

  .pr-card-material__headline {
    text-shadow: 1px 1px 10px #000;
  }

  .pr-card-material .v-responsive__content {
    background: rgba(0,0,0,0.3);
  }
</style>
