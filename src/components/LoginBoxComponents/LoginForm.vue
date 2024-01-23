<script setup>

import {ref} from 'vue';
import config from "../../../config";

const errorMessage = ref(null);

const onSubmit = async (e) => {
	document.getElementById('login__box__popup').style.display = 'flex';

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
	fetch(config.api.url + '/Account/login', requestOptions)
		.then(async response => {
			const isJson = response.headers.get('content-type')?.includes('application/json');
			const data = isJson && await response.json();

			if (response.ok) {
				document.getElementById('login__box__popup__holder__icon__circle-loader').classList.add('load-complete', 'load-success');
				document.getElementById('login__box__popup__holder__icon__checkmark').style.display = 'block';
				localStorage.clear();
				localStorage.BearerToken = data["token"];
				localStorage.ProfilePicture = data['base64String'];
				localStorage.UserName = data['username'];
				window.location.replace("#/spiel");
			}

			// check for error response
			if (!response.ok) {
				localStorage.clear();
				// get error message from body or default to response status
				const error = (data && data.message) || response.status;
				document.getElementById('login__box__popup__holder__icon__circle-loader').classList.add('load-complete', 'load-fail');
				document.getElementById('login__box__popup__holder__icon__crossmark').style.display = 'block';
				if (response.status === 401) {
					document.getElementById('login__box__popup__holder__text').innerText = 'Benutzername oder Passwort inkorrekt.';
				} else {
					document.getElementById('login__box__popup__holder__text').innerText = 'Ein Fehler ist aufgetreten, bitte versuchen Sie es erneut.';
				}
				setTimeout(() => {
					document.getElementById('login__box__popup__holder__icon__circle-loader').classList.remove('load-complete', 'load-success', 'load-fail');
					document.getElementById('login__box__popup__holder__icon__checkmark').style.display = 'none';
					document.getElementById('login__box__popup__holder__icon__crossmark').style.display = 'none';
					document.getElementById('login__box__popup').style.display = 'none';
				}, 2500);
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
		<div id="username__error" class="login__box__form__validation_error"></div>
		<label for="password" hidden="hidden">Passwort</label>
		<input id="password" name="password" type="password" placeholder="Passwort" class="login__box__form__input">
		<div id="password__error" class="login__box__form__validation_error"></div>
		<input type="submit" class="login__box__form__submit" value="Einloggen">
	</form>
	<div id="login__box__popup" class="login__box__popup" style="display: none">
		<div class="login__box__popup__holder">
			<div id="login__box__popup__holder__icon" class="login__box__popup__holder__icon">
				<div id="login__box__popup__holder__icon__circle-loader" class="circle-loader">
					<div id="login__box__popup__holder__icon__checkmark" class="checkmark draw"></div>
					<div id="login__box__popup__holder__icon__crossmark" class="crossmark draw"></div>
				</div>
			</div>
			<div id="login__box__popup__holder__text" class="login__box__popup__holder__text">

			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "LoginForm"
}
</script>

<style scoped>

</style>