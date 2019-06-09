import Vue from 'vue';
import Router from 'vue-router';
import DefaultLayout from './layouts/Default.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Login from './views/Login.vue';
import Search from './views/Search.vue';
import Material from './views/Material.vue';
import Materials from './views/Materials.vue';
import NewUser from './views/NewUser.vue';
import Crafts from './views/Crafts.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'Home',
          component: Home
        },
        {
          path: '/sobre',
          name: 'About',
          component: About
        },
        {
          path: '/entrar',
          name: 'Login',
          component: Login
        },
        {
          path: '/pesquisar',
          name: 'Search',
          component: Search
        },
        {
          path: '/reciclagem/cadastrar',
          name: 'Material',
          component: Material
        },
        {
          path: '/materiais',
          name: 'Materials',
          component: Materials
        },
        {
          path: '/usuarios/cadastrar',
          name: 'NewUser',
          component: NewUser
        },
        {
          path: '/artesanatos',
          name: 'Crafts',
          component: Crafts
        }
      ]
    }
  ]
})
