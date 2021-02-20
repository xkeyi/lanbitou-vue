import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
        path: '/',
        name: 'home',
        component: () => import ('../views/blog/list.vue')
    },{
        path: '/blog/:id',
        name: 'blogShow',
        component: () =>import ('../views/blog/content.vue'),
        meta: {
            title: 'loading……',
            keepAlive: true // 需要被缓存
        }
    },{
        path: '/blog/create',
        name: 'blogCreate',
        component: () =>import ('../views/blog/create.vue'),
        meta: {
            title: 'loading……',
            keepAlive: true // 需要被缓存
        }
    }
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

export default router