import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      /**
       * Genel
       * Home, Categories, TopMenu, BotMenu, Modules, Contact
       */
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: { requiresAuth: true, breadcrumb: 'Dashboard', breadcrumbParent: 'Genel' }
      },
      /**
       * Kategoriler
       */
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: { layout: 'auth', breadcrumb: 'Giriş Yap' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
    meta: { layout: 'auth', breadcrumb: 'Sayfa Bulunamadı' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ top: 0, behavior: 'smooth' });
        }, 100);
      });
    }
  },
})

router.beforeEach(async (to, from, next) => {
  document.title = to.meta.breadcrumb + " - Alpenk";

  const isAuthenticated = store.state.token;
  const isUserDataLoaded = localStorage.getItem('isUserDataLoaded') === 'true';

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({ name: 'Login' });
    } else {
      if (store.state.isUserDataLoaded || isUserDataLoaded) {
        next();
      } else {
        try {
          await store.dispatch('userDataAPI');
          store.commit('setIsUserDataLoaded', true);
          localStorage.setItem('isUserDataLoaded', 'true');
          next();
        } catch (error) {
          console.error('User data fetch failed:', error);
          next({ name: 'Login' });
        }
      }
    }
  } else if (to.name === 'Login' && isAuthenticated) {
    next({ name: 'Home' });
  } else {
    next();
  }
});

export default router
