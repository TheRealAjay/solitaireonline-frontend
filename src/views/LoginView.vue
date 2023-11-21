<script setup>
import Navigator from "@/components/Navigator.vue";
import LoginBox from "@/components/LoginBox.vue";
</script>

<template>
	<div class="main">
		<Navigator />
		<LoginBox :title="'Login'" />
	</div>
</template>

<script>
export default {
	name: "LoginView"
}
</script>

<style scoped>

</style>