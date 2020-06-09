import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index';

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '',
                name: 'Main',
                component: () => import('../components/MainComponent.vue')
            },
            {
                path: '/start',
                name: 'Start',
                component: () => import('../components/StartComponent.vue')
            },
            {
                path: '/level',
                name: 'Level',
                component: () => import('../components/Level.vue'),
            },
            {
                path: '/round',
                name: 'Round',
                component: () => import('../components/GameRoundComponent.vue')
            },
            {
                path: '/scoreboard',
                name: 'ScoreBoard',
                component: () => import('../components/ScoreBoard.vue')
            },
            {
                path: '/rules',
                name: 'Rules',
                component: () => import('../components/Rules.vue')
            },
        ]
    },


]

const router = new VueRouter({
    routes
})

export default router
