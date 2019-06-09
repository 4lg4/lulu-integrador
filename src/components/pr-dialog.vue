<template>
  <v-dialog
    v-model="value"
    max-width="400"
    class="pr-dialog"
  >
    <v-card>
      <v-card-title class="headline">{{title}}</v-card-title>

      <slot></slot>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          color="green darken-1"
          flat="flat"
          @click="click"
        >
          OK
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "pr-page",
  props: {
    title: {
      type: String,
      default: null,
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>
