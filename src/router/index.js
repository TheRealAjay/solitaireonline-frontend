import {createRouter, createWebHistory} from 'vue-router'
import MainView from "@/views/MainView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'login',
			component: MainView
		},
		{
			path: '/registrierung',
			name: 'registrierung',
			component: () => import('../views/MainView.vue')
		},
		{
			path: '/spiel',
			name: 'spiel',
			component: () => import('../views/GameView.vue')
		}
	]
})

export default router
