<script setup>
import Navigator from "@/components/Navigator.vue";
import LoginBox from "@/components/LoginBox.vue";
</script>

<template>
	<div class="main">
		<Navigator />
		<LoginBox :title="'Registrierung'" :component-type="'register'" />
	</div>
</template>

<script>
export default {
	name: "RegisterView"
}
</script>

<style scoped>

</style>