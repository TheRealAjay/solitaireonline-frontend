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

	if (!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}$/.test(values['password'])) {
		document.getElementById('password__error').innerText = 'Passwort muss mind. 6 Zeichen Lang sein und mind. einen Großbuchstaben und Sonderzeichen beinhalten';
		return;
	}

	if (values['password'] !== values['repeat_password']) {
		document.getElementById('repeat_password__error').innerText = 'Passwörter müssen übereinstimmen';
		return;
	}

	document.getElementById('login__box__popup').style.display = 'flex';

	const requestOptions = {
		method: 'POST',
		headers: {
			"Content-Type": "application/json",
			"Accept": "*/*",
		},
		body: JSON.stringify({
			username: values['username'],
			password: values['password'],
			passwordConfirm: values['repeat_password']
		})
	};

	fetch(config.api.url + '/Account/register', requestOptions)
		.then(async response => {
			const isJson = response.headers.get('content-type')?.includes('application/json');
			const data = isJson && await response.json();

			if (response.ok) {
				document.getElementById('login__box__popup__holder__icon__circle-loader').classList.add('load-complete', 'load-success');
				document.getElementById('login__box__popup__holder__icon__checkmark').style.display = 'block';
				document.getElementById('login__box__popup__holder__text').innerText = 'Registrierung war erfolgreich, Sie werden in Kürze weitergeleitet.';
				localStorage.clear();
				setTimeout(() => {
					window.location.replace("/");
				}, 2500)
			}

			// check for error response
			if (!response.ok) {
				localStorage.clear();
				// get error message from body or default to response status
				const error = (data && data.message) || response.status;

				document.getElementById('login__box__popup__holder__icon__circle-loader').classList.add('load-complete', 'load-fail');
				document.getElementById('login__box__popup__holder__icon__crossmark').style.display = 'block';
				if (response.status === 409) {
					document.getElementById('login__box__popup__holder__text').innerText = 'Benutzername ist bereits vergeben.';
				} else {
					document.getElementById('login__box__popup__holder__text').innerText = 'Ein Fehler ist aufgetreten, bitte versuchen Sie es erneut.';
				}
				setTimeout(() => {

					document.getElementById('login__box__popup__holder__icon__circle-loader').classList.remove('load-complete', 'load-success', 'load-fail');
					document.getElementById('login__box__popup__holder__icon__checkmark').style.display = 'none';
					document.getElementById('login__box__popup__holder__icon__crossmark').style.display = 'none';
					document.getElementById('login__box__popup').style.display = 'none';
				}, 2500)
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
	<form @submit.prevent="onSubmit" id="registerform" class="login__box__form" method="post">
		<label for="username" hidden="hidden">Benutzername</label>
		<input id="username" name="username" type="text" placeholder="Benutzername" class="login__box__form__input">
		<div id="username__error" class="login__box__form__validation_error">

		</div>
		<label for="password" hidden="hidden">Passwort</label>
		<input @keyup="onPasswordUp" id="password" name="password" type="password" placeholder="Passwort"
			   class="login__box__form__input">
		<div id="password__error" class="login__box__form__validation_error">

		</div>
		<label for="repeat_password" hidden="hidden">Passwort</label>
		<input @keyup="onRepeatUp" id="repeat_password" name="repeat_password" type="password"
			   placeholder="Passwort wiederholen"
			   class="login__box__form__input">
		<div id="repeat_password__error" class="login__box__form__validation_error">

		</div>
		<input type="submit" class="login__box__form__submit" value="Registrieren">
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
import {debounce} from "../../../config";

export default {
	name: "RegisterForm",
	data() {
		return {
			debounceCheckValid: null,
			debounceCheckDouble: null,
			filterName: ''
		}
	},
	mounted() {
		this.debounceCheckValid = debounce((e) => this.checkPasswordValidation(e), 800);
		this.debounceCheckDouble = debounce((e) => this.checkPasswordSame(e), 800);
	},
	methods: {
		checkPasswordValidation(event) {
			let password = event.target.form.elements['password'].value;
			let regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{6,}$/;
			if (!regex.test(password)) {
				document.getElementById('password__error').innerText = 'Passwort muss mind. 6 Zeichen Lang sein und mind. einen Großbuchstaben, Zahl und Sonderzeichen beinhalten';
			} else if (regex.test(password)) {
				document.getElementById('password__error').innerText = null;
			}
		},
		checkPasswordSame(event) {
			let password = event.target.form.elements['password'].value;
			let repeat_password = event.target.form.elements['repeat_password'].value;

			if (password !== repeat_password) {
				document.getElementById('repeat_password__error').innerText = 'Passwörter müssen übereinstimmen';
			} else if (password === repeat_password) {
				document.getElementById('repeat_password__error').innerText = null;
			}
		},
		onPasswordUp(e) {
			this.debounceCheckValid(e);
		},
		onRepeatUp(e) {
			this.debounceCheckDouble(e);
		}
	}
}

</script>

<style scoped>

</style>