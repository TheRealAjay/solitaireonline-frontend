<script setup>
const props = defineProps(['value', 'type', 'flipped'])
const imageUrl = new URL(`/src/assets/cards/${props.type}_${props.value}.png`, import.meta.url).href;
const backgroundURL = new URL(`/src/assets/cards/backart_2.png`, import.meta.url).href;
</script>

<template>
	<div class="playingCard" :class="flipped ? 'playingCard--flipped' : ''">
		<div class="playingCard__front" :style="{backgroundImage: `url(${imageUrl})`}"></div>
		<div class="playingCard__back" :style="{backgroundImage: `url(${backgroundURL})`}"></div>
	</div>
</template>

<script>
export default {
	name: "PlayingCard",
	props: {
		id: {
			type: Number,
			required: true,
		},
		value: {
			type: Number,
			required: true,
		},
		type: {
			type: String,
			required: true,
		},
		flipped: {
			type: Boolean,
			required: true,
		},
		stack: {
			type: Number,
			required: true,
		},
		position: {
			type: String,
			required: true,
		}
	}
}
</script>

<style scoped>

</style>