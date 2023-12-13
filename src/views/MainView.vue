<script setup>
import LoginBox from "@/components/LoginBox.vue";
</script>

<template>
	<LoginBox :title="getPathName()" :component-type="getPathName()" />
</template>

<script>
export default {
	name: "LoginView",
	methods: {
		getPathName() {
			return window.location.pathname;
		}
	}
}
</script>

<style scoped>

</style>