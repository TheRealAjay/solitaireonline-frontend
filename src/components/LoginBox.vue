<script setup>
import logo from "../assets/logo@2x.png";
import LoginForm from "@/components/LoginBoxComponents/LoginForm.vue";
import RegisterForm from "@/components/LoginBoxComponents/RegisterForm.vue";
</script>

<template>
	<div class="login__box">
		<div class="login__box__logo__container">
			<img :src="logo" alt="logo" class="login__box__logo">
		</div>
		<div class="login__box__title">
			<div class="login__box__title__top">
				Solitaire Meister
			</div>
			<div class="login__box__title__bottom">
				{{ title }}
			</div>
		</div>
		<div class="login__box__form__container">
			<LoginForm v-if="componentType==='login'" />
			<RegisterForm v-if="componentType==='register'" />
		</div>
	</div>
</template>

<script>

export default {
	name: "LoginBox",
	props: {
		title: {
			type: String,
			default: "Login"
		},
		componentType: {
			type: String,
			default: "login"
		}
	}
}
</script>
