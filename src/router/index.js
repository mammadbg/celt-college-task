import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/components/layout/Layout.vue'),
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '/',
        component: () => import('@/views/Dashboard.vue'),
        name: 'Dashboard',
        meta: {
          pageAccessCode: '',
          breadcrumpItems: [
            {
              text: 'Dashboard',
              disabled: false,
              href: '/',
            },
          ],
        },
      },
      {
        path: '/examResults',
        component: () => import('../views/ExamResults.vue'),
        name: 'ExamResults',
        meta: {
          pageAccessCode: '',
          breadcrumpItems: [
            {
              text: 'Exam results',
              disabled: false,
              href: '/examResults',
            },
          ],
        },
      },
      {
        path: '/speakings',
        component: () => import('../views/Speakings.vue'),
        name: 'speakings',
        meta: {
          pageAccessCode: '',
          breadcrumpItems: [
            {
              text: 'Speakings',
              disabled: false,
              href: '/speakings',
            },
          ],
        },
      },
      {
        path: '/speakingGroup',
        component: () => import('../views/SpeakingGroup.vue'),
        name: 'SpeakingGroup',
        meta: {
          pageAccessCode: '',
          breadcrumpItems: [
            {
              text: 'SpeakingGroup',
              disabled: false,
              href: '/speakingGroup',
            },
          ],
        },
      },
      {
        path: '/dummyPage',
        component: () => import('../views/DummyPage.vue'),
        name: 'dummyPage',
        meta: {
          pageAccessCode: '',
          breadcrumpItems: [
            {
              text: 'Dummy page',
              disabled: false,
              href: '/dummyPage',
            },
          ],
        },
      },


    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.afterEach(() => {
  store.dispatch('auth/breadcrumbs', router.history.current.meta.breadcrumpItems);
});


export default router;
