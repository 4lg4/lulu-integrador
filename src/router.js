import store from './store';
import Vue from 'vue';
import Router from 'vue-router';
import DefaultLayout from './layouts/Default.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Login from './views/Login.vue';
import Search from './views/Search.vue';
import Material from './views/Material.vue';
import Materials from './views/Materials.vue';
import MyMaterials from './views/MyMaterials.vue';
import NewUser from './views/NewUser.vue';
import Crafts from './views/Crafts.vue';

Vue.use(Router);

const router = new Router({
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
          path: '/reciclagem/minha',
          name: 'MyMaterials',
          component: MyMaterials
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
});

const loggedModules = ['Material', 'MyMaterials'];

router.beforeEach((to, from, next) => {
  if (!store.state.user.id && loggedModules.includes(to.name)) {
    return next({name: 'Login'});
  }

  next();
});

export default router;
