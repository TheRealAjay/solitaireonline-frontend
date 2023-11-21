<script setup>

import axios from 'axios';
import config from '../../../vite.config'

 const onSubmit = async (e) => {
	let values = [];
	for (const eElement of e.target.elements) {
		if (eElement.name){
			values[eElement.name] = eElement.value;
		}
	}

	let response = await axios({
		// url: config.api.url,
	})
}
</script>

<template>
	<form @submit.prevent="onSubmit" id="loginForm" class="login__box__form" method="post">
		<label for="username" hidden="hidden">Benutzername</label>
		<input id="username" name="username" type="text" placeholder="Benutzername" class="login__box__form__input">
		<label for="password" hidden="hidden">Passwort</label>
		<input id="password" name="password" type="password" placeholder="Passwort" class="login__box__form__input">
		<input type="submit" class="login__box__form__submit" value="Einloggen">
	</form>
</template>

<script>
export default {
	name: "LoginForm"
}
</script>

<style scoped>

</style>