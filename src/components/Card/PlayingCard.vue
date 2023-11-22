<script setup>
const props = defineProps(['value', 'type'])
const imageUrl = new URL(`/src/assets/cards/${props.type}_${props.value}.png`, import.meta.url).href;
const backgroundURL = new URL(`/src/assets/cards/backart.png`, import.meta.url).href;
</script>

<template>
	<div class="playingCard">
		<div class="playingCard__front" :style="{backgroundImage: `url(${imageUrl})`}"></div>
		<div class="playingCard__back" :style="{backgroundImage: `url(${backgroundURL})`}"></div>
	</div>
</template>

<script>
export default {
	name: "PlayingCard",
	props: {
		value: {
			type: Number,
			required: true,
		},
		type: {
			type: String,
			required: true,
		}
	}
}
</script>

<style scoped>

</style>