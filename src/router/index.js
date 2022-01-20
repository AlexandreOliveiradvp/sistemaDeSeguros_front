import { createRouter, createWebHistory } from '../../node_modules/vue-router'
import Dashboard from '../views/Dashboard.vue'
import Teste2 from '../views/Teste2.vue'


const routes =[
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
    },
    {
        path: '/2',
        name : 'Teste2',
        component: Teste2,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router