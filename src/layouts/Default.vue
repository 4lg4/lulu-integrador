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
              <a href="#/pesquisar">Pesquisar</a>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>


        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              <a href="#/artesanatos">Artesanatos</a>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>



        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              <a href="#/materiais">Materiais</a>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              <a href="#/reciclagem/cadastrar">Cadastrar reciclagem</a>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              <a href="#/entrar">Entrar</a>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              <a href="#/usuarios/cadastrar">Cadastrar usuários</a>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              <a href="#/sobre">Sobre</a>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              <a href="#/">Home</a>
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
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'LayoutDefault',

  props: {
    source: String
  },

  data () {
    return {
      drawer: null,
      drawerRight: null,
      left: false
    }
  }
}
</script>

<style scoped>
  .Default__footer {
    padding: 0 10px;
  }
</style>
