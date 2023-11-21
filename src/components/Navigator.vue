<template>
	<nav>
		<RouterLink to="/">Login</RouterLink>
		<RouterLink to="/register">Registrierung</RouterLink>
	</nav>
</template>

<script>
export default {
	name: "Navigator"
}
</script>

<style scoped>
nav {
	width      : 100%;
	font-size  : 12px;
	text-align : center;
	margin-top : 0;
}

nav a.router-link-exact-active {
	color : #00bd7e;
}

nav a.router-link-exact-active:hover {
	background-color : transparent;
}

nav a {
	display     : inline-block;
	padding     : 0 1rem;
	border-left : 1px solid var(--color-border);
	color       : var(--color-text);
}

nav a:first-of-type {
	border : 0;
}

</style>