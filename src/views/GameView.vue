<script setup>
import background_image from "../assets/background.png";
import PlayingCard from "@/components/Card/PlayingCard.vue";

import {ref, onMounted} from 'vue'

const cardObject = {
	0: {
		value: 13,
		type: 'Diamond',
		flipped: false,
	},
	1: {
		value: 5,
		type: 'Spade',
		flipped: false,
	},
	2: {
		value: 1,
		type: 'Heart',
		flipped: false,
	},
	3: {
		value: 8,
		type: 'Clover',
		flipped: false,
	},
	4: {
		value: 11,
		type: 'Heart',
		flipped: true,
	}
}

</script>

<template>
	<div class="gameView">
		<div class="gameView__playArea" :style="{backgroundImage:`url(${background_image})`}">
			<div class="gameView__playArea__drawDeck__holder">
				<template v-for="(item, index) in cardObject">
					<PlayingCard @drag="dragging" :draggable="true" :type="item.type" :value="item.value"
					             :flipped="item.flipped" />
				</template>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: "GameView",
	methods: {
		startDrag(e, item) {
			console.log(e)
		},
		dragging(e, item) {
			console.log(e)
		},
		onDrop(e, list) {
			console.log(e)
		},
	},
}
</script>

<style scoped>

</style>