<script setup>

import {ref} from 'vue';
import config from "../../../config";

const errorMessage = ref(null);

const onSubmit = async (e) => {
	let values = [];
	for (const eElement of e.target.elements) {
		if (eElement.name) {
			values[eElement.name] = eElement.value;
		}
	}

	const requestOptions = {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "*/*",
		},
		body: JSON.stringify({
			username: values['username'],
			password: values['password']
		})
	};
	fetch(config.api.url + 'login', requestOptions)
		.then(async response => {
			const isJson = response.headers.get('content-type')?.includes('application/json');
			const data = isJson && await response.json();

			// check for error response
			if (!response.ok) {
				// get error message from body or default to response status
				const error = (data && data.message) || response.status;
				return Promise.reject(error);
			}
		})
		.catch(error => {
			errorMessage.value = error;
			console.error("There was an error!", error);
		});
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