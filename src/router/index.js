import {createRouter, createWebHashHistory} from "vue-router";
import MainView from "@/views/MainView.vue";
import GameView from "@/views/GameView.vue";
import ScoreView from "@/views/ScoreView.vue";

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "login",
			component: MainView,
		},
		{
			path: "/registrierung",
			name: "registrierung",
			component: MainView,
		},
		{
			path: "/spiel",
			name: "spiel",
			component: GameView,
		},
		{
			path: "/score",
			name: "score",
			component: ScoreView,
		},
	],
});

export default router;
