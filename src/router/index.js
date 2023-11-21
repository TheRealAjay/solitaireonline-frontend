import {createRouter, createWebHistory} from 'vue-router'
import LoginView from "@/views/LoginView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'login',
			component: LoginView
		},
		{
			path: '/registrierung',
			name: 'registrierung',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/RegisterView.vue')
		},
		{
			path: '/spiel',
			name: 'spiel',
			component: () => import('../views/GameView.vue')
		}
	]
})

export default router
