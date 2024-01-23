<template>
	<div class="nav">
		<a @click="setWindow(0)">Login</a>
		<a @click="setWindow(1)">Registrierung</a>
	</div>
</template>

<script>
export default {
	name: "Navigator",
	emits: ["changeView"],
	methods: {
		setWindow(str) {
			this.$emit('changeView', str);
		}
	},
}
</script>

<style scoped>
.nav {
	width         : 100%;
	font-size     : 12px;
	text-align    : center;
	margin-top    : 0;
	margin-bottom : 25px;
}

.nav a.router-link-exact-active {
	color : #00bd7e;
}

.nav a.router-link-exact-active:hover {
	background-color : transparent;
}

.nav a {
	display     : inline-block;
	padding     : 0 1rem;
	border-left : 1px solid var(--color-border);
	color       : var(--color-text);
	cursor      : pointer;
}

.nav a:first-of-type {
	border : 0;
}

</style>