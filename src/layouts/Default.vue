<template>
  <v-app class="Default">
    <v-toolbar
      color="light-green darken-1"
      dark
      fixed
      app
      clipped-right
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Portal da reciclagem</v-toolbar-title>
      <v-spacer></v-spacer>
      <a href="#/pesquisar"><v-icon>search</v-icon></a>
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>
<!--        <v-list-tile @click.stop="left = !left">-->
<!--          <v-list-tile-action>-->
<!--            <v-icon>exit_to_app</v-icon>-->
<!--          </v-list-tile-action>-->
<!--          <v-list-tile-content>-->
<!--            <v-list-tile-title>Open Temporary Drawer</v-list-tile-title>-->
<!--          </v-list-tile-content>-->
<!--        </v-list-tile>-->

        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              <span v-if="user.id"><u>{{user.firstName}}</u></span>
              <a href="#/entrar" class="green--text" v-if="!user.id">Entrar</a>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile v-if="!user.id">
          <v-list-tile-content>
            <v-list-tile-title>
              <a href="#/usuarios/cadastrar" class="green--text">Quero me cadastrar</a>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile v-if="user.id">
          <v-list-tile-content>
            <v-list-tile-title>
              <a href="#/reciclagem/minha" class="green--text">Minha reciclagem</a>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile v-if="user.id">
          <v-list-tile-content>
            <v-list-tile-title>
              <a href="#/reciclagem/cadastrar" class="green--text">Cadastrar reciclagem</a>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>


        <v-list-tile>
          <v-list-tile-content>
<!--            <v-list-tile-title>-->
              <hr>
<!--            </v-list-tile-title>-->
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              <a href="#/pesquisar" class="green--text">Pesquisar</a>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              <a href="#/artesanatos" class="green--text">Artesanatos</a>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              <a href="#/materiais" class="green--text">Materiais</a>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-content>
            <!--            <v-list-tile-title>-->
            <hr>
            <!--            </v-list-tile-title>-->
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              <a href="#/sobre" class="green--text">Sobre</a>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              <a href="#/" class="green--text">Home</a>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <router-view />
        </v-layout>
      </v-container>
    </v-content>

    <v-footer color="light-green darken-1" class="white--text Default__footer" app>
      <span>Portal da reciclagem</span>
      <v-spacer></v-spacer>
      <span>&copy; {{ new Date().getFullYear() }} <small>lulu enterprises</small></span>
    </v-footer>
  </v-app>
</template>

<script>
  import {mapState} from 'vuex';

export default {
  name: 'LayoutDefault',

  props: {
    source: String
  },

  data () {
    return {
      drawer: null,
      drawerRight: null,
      left: false,
    };
  },
  computed: {
    ...mapState(['user']),
  },
};
</script>

<style scoped>
  .Default__footer {
    padding: 0 10px;
  }
</style>
