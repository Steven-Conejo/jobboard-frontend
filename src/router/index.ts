import { createRouter, createWebHistory } from '@ionic/vue-router'; 
import { RouteRecordRaw } from 'vue-router'; 

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    component: () => import('@/views/Register.vue') 
  },
  {
    path: '/home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/folder/:id',
    component: () => import('@/views/FolderPage.vue')
  },
  {
    path: '/somos',
    component: () => import('@/views/Somos.vue')
  },
  {
    path: '/dashboard-reclutadores',
    component: () => import('@/views/DashboardReclutadores.vue')
  },
  {
    path: '/oferta',
    component: () => import('@/views/Oferta.vue') 
  },

  {
    path: '/dashboard-candidatos',
    component: () => import('@/views/DashboardCandidatos.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
