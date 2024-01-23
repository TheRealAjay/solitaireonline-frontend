<script setup>
import {RouterLink, RouterView} from 'vue-router'
import Navigator from "@/components/Navigator.vue";
import GameView from "@/views/GameView.vue";
import logo from "@/assets/logo@2x.png";
import LoginForm from "@/components/LoginBoxComponents/LoginForm.vue";
import RegisterForm from "@/components/LoginBoxComponents/RegisterForm.vue";
import ScoreView from "@/views/ScoreView.vue";
</script>

<template>
	<GameView @change-view="(newView) => showWindow = newView" v-if="showWindow === config.view.Game"></GameView>
	<ScoreView @change-view="(newView) => showWindow = newView" v-if="showWindow === config.view.Score"></ScoreView>
	<div class="main" v-if="showWindow === config.view.Login || showWindow === config.view.Register">
		<Navigator @change-view="(newView) => showWindow = newView" class="mb-5"></Navigator>
		<div class="login__box">
			<div class="login__box__logo__container">
				<img :src="logo" alt="logo" class="login__box__logo">
			</div>
			<div class="login__box__title">
				<div class="login__box__title__top">
					Solitaire Meister
				</div>
				<div class="login__box__title__bottom">
					{{ getName() }}
				</div>
			</div>
			<div class="login__box__form__container">
				<Transition name="slide" mode="out-in">
					<div class="login__box__form__container__item" v-if="showWindow === config.view.Login">
						<LoginForm @change-view="(newView) => showWindow = newView" />
					</div>
					<div class="login__box__form__container__item" v-else-if="showWindow === config.view.Register">
						<RegisterForm @change-view="(newView) => showWindow = newView" />
					</div>
				</Transition>
			</div>
		</div>
	</div>
</template>

<script>
import config from "../navigator.json";

export default {
	data() {
		return {
			showWindow: config.view.Login,
			bearerTokenExists: false,
		}
	},
	beforeMount() {
		this.bearerTokenExists = localStorage.BearerToken !== undefined && localStorage.BearerToken !== null;
		if (this.bearerTokenExists) {
			this.showWindow = config.view.Game
		}
	},
	methods: {
		getName() {
			if (this.showWindow === config.view.Login) {
				return 'Login'
			} else {
				return 'Registrierung'
			}
		},
	}
}
</script>

<style scoped>
header {
	line-height : 1.5;
	max-height  : 100vh;
}

.logo {
	display : block;
	margin  : 0 auto 2rem;
}

@media (min-width : 1024px) {
	header {
		display       : flex;
		place-items   : center;
		padding-right : calc(var(--section-gap) / 2);
	}

	.logo {
		margin : 0 2rem 0 0;
	}

	header .wrapper {
		display     : flex;
		place-items : flex-start;
		flex-wrap   : wrap;
	}

	nav {
		text-align  : left;
		margin-left : -1rem;
		font-size   : 1rem;

		padding     : 1rem 0;
		margin-top  : 1rem;
	}
}

.slide-enter-active,
.slide-leave-active {
	transition : all 0.25s ease-out;
}

.slide-enter-from {
	opacity   : 0;
	transform : translateX(30px);
}

.slide-leave-to {
	opacity   : 0;
	transform : translateX(-30px);
}
</style>
