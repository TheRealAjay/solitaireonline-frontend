<script setup>
import logo from "../assets/logo@2x.png"
</script>

<template>
	<div class="login__box">
		<div class="login__box__logo__container">
			<img :src="logo" alt="logo" class="login__box__logo">
		</div>
		<div class="login__box__title">
			<div class="login__box__title__top">
				Solitaire Online
			</div>
			<div class="login__box__title__bottom">
				{{ title }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "LoginBox",
	props: {
		title: {
			type: String,
			required: true,
			default: "Login"
		}
	}
}
</script>
