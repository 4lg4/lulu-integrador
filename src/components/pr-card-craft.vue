<template>
  <v-flex
    xs12 sm6 md4
    class="pr-card-craft"
  >

    <v-card>
      <v-img
        :src="value.image"
        height="200px"
      >
        <v-container
          fill-height
          fluid
          pa-2
        >
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <span class="headline white--text pr-card-craft__headline" v-text="value.title"></span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-img>

      <v-card-title primary-title>
        <div> {{value.description}} </div>
      </v-card-title>

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
  import PrDialog from '@/components/pr-dialog.vue';
export default {
  name: "pr-card-craft",
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
      dialogTodo: false,
      dialogContact: false,
      dialogContactText: null,
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

<style scoped>
  .pr-card-craft {
    padding: 5px;
  }

  .pr-card-craft__headline {
    text-shadow: 2px 2px 3px #000000;
  }
</style>
