<script setup>
import background_image from "../assets/background.png";
import PlayingCard from "@/components/Card/PlayingCard.vue";
</script>

<template>
	<div class="gameView">
		<div class="gameView__playArea" :style="{backgroundImage:`url(${background_image})`}">
			<div class="gameView__playArea__drawDeck__holder">
				<PlayingCard type="Clover" value="1" />
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