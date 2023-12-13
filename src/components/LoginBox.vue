<script setup>
import logo from "../assets/logo@2x.png";
import LoginForm from "@/components/LoginBoxComponents/LoginForm.vue";
import RegisterForm from "@/components/LoginBoxComponents/RegisterForm.vue";
import {RouterView} from "vue-router";
import Navigator from "@/components/Navigator.vue";
</script>

<template>
	<div class="main">
		<Navigator />
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
					<div class="login__box__form__container__item" v-if="componentType==='/'">
						<LoginForm />
					</div>
					<div class="login__box__form__container__item" v-else-if="componentType==='/registrierung'">
						<RegisterForm />
					</div>
				</Transition>
			</div>
		</div>
	</div>
</template>

<style>
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

<script>

export default {
	name: "LoginBox",
	props: {
		title: {
			type: String,
			default: ""
		},
		componentType: {
			type: String,
			default: "/"
		}
	},
	methods: {
		getName() {
			if (this.componentType === '/') {
				return 'Login'
			} else {
				return 'Registrierung'
			}
		}
	}
}
</script>
