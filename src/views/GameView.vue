<script setup>
import background_image from "../assets/background.png";
</script>

<template>
	<div class="gameView">
		<div class="gameView__playArea" :style="{backgroundImage:`url(${background_image})`}">
			<div class="gameView__playArea__drawDeck__holder">

			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "GameView"
}
</script>

<style scoped>

</style>