<script setup>
import background_image from "../assets/background.png";
import PlayingCard from "@/components/Card/PlayingCard.vue";

import {ref, onMounted} from 'vue'

// const cardObject = {
// 	0: {
// 		value: 13,
// 		type: 'Diamond',
// 		flipped: false,
// 		stack: 1,
// 	},
// 	1: {
// 		value: 5,
// 		type: 'Spade',
// 		flipped: false,
// 		stack: 2,
// 	},
// 	2: {
// 		value: 1,
// 		type: 'Heart',
// 		flipped: false,
// 		stack: 1,
// 	},
// 	3: {
// 		value: 8,
// 		type: 'Clover',
// 		flipped: false,
// 		stack: 2,
// 	},
// 	4: {
// 		value: 11,
// 		type: 'Heart',
// 		flipped: true,
// 		stack: 1,
// 	}
// }

</script>

<!-- <template>
	<div class="gameView">
		<div class="gameView__playArea" :style="{backgroundImage:`url(${background_image})`}">
			<div class="gameView__playArea__drawDeck__holder">
				<template v-for="(item, index) in cardObject">
					<PlayingCard @drag="startDrag($event, index)" @dragend="dragEnd($event, index)" :draggable="true" :type="item.type" :value="item.value"
					             :flipped="item.flipped" />
				</template>
			</div>
			<div class="gameView__playArea__drawDeck__dropZone" @drop="onDrop($event, index)" @dragover.prevent @dragenter.prevent>
				
			</div>
		</div>
	</div>
</template> -->

<template>
	<div class="gameView">
		<div class="gameView__playArea" :style="{backgroundImage:`url(${background_image})`}">
			<div class="gameView__playArea__drawDeck__holder" @drop="onDrop($event, 1)" @dragover.prevent @dragenter.prevent>
				<div
					class="drag-el"
					v-for="item in stackOne"
					:key="item.id"
					draggable="true"
					@dragstart="startDrag($event, item)">
						<PlayingCard :type="item.type" :value="item.value" :flipped="item.flipped" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__dropZone drop-zone" @drop="onDrop($event, 2)" @dragover.prevent @dragenter.prevent>
				<div
					class="drag-el"
					v-for="item in stackTwo"
					:key="item.id"
					draggable="true"
					@dragstart="startDrag($event, item)">
						<PlayingCard :type="item.type" :value="item.value" :flipped="item.flipped" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {

	// data() {
	// 	return {
	// 		items: [
	// 			{
	// 			id: 0,
	// 			title: 'Item A',
	// 			list: 1,
	// 			},
	// 			{
	// 			id: 1,
	// 			title: 'Item B',
	// 			list: 1,
	// 			},
	// 			{
	// 			id: 2,
	// 			title: 'Item C',
	// 			list: 2,
	// 			},
	// 		],
	// 	}
  	// },

//   computed: {
//     listOne() {
//       return this.items.filter((item) => item.list === 1)
//     },
//     listTwo() {
//       return this.items.filter((item) => item.list === 2)
//     },
//   },

	data() {
		return {
			cardObjects: [
				{
					id: 0,
					value: 13,
					type: 'Diamond',
					flipped: true,
					stack: 1,
				},
				{
					id: 1,
					value: 5,
					type: 'Spade',
					flipped: true,
					stack: 2,
				},
				{
					id: 2,
					value: 1,
					type: 'Heart',
					flipped: true,
					stack: 1,
				},
				{
					id: 3,
					value: 8,
					type: 'Clover',
					flipped: true,
					stack: 2,
				},
				{
					id: 4,
					value: 11,
					type: 'Heart',
					flipped: true,
					stack: 1,
				}
			]
		}
  	},

  computed: {
    stackOne() {
      return this.cardObjects.filter((item) => item.stack === 1)
    },
    stackTwo() {
      return this.cardObjects.filter((item) => item.stack === 2)
    },
  },

	name: "GameView",
	// methods: {
	// 	startDrag(evt, item) {
	// 		// evt.dataTransfer.dropEffect = 'move'
	// 		// evt.dataTransfer.effectAllowed = 'move'
	// 		// evt.dataTransfer.setData('itemID', item.id)
	// 		// console.log(evt);
	// 	},
	// 	// dragging(e, item) {
	// 	// 	console.log(e)
	// 	// },
	// 	onDrop(evt, list) {
	// 		// const itemID = evt.dataTransfer.getData('itemID')
	// 		// const item = this.items.find((item) => item.id == itemID)
	// 		// item.list = list
	// 		console.log(evt);
    // 	},
	// 	dragEnd(evt, item) {
	// 		console.log(evt);
	// 	}
	// },

	methods: {
		startDrag(evt, item) {
			evt.dataTransfer.dropEffect = 'move'
			evt.dataTransfer.effectAllowed = 'move'
			evt.dataTransfer.setData('itemID', item.id)
		},
		onDrop(evt, stack) {
			const itemID = evt.dataTransfer.getData('itemID')
			const item = this.items.find((item) => item.id == itemID)
			item.stack = stack
		},
	},
}
</script>

<style scoped>

.drop-zone {
  background-color: #eee;
  margin-bottom: 10px;
  padding: 10px;
}

.drag-el {
  margin-bottom: 10px;
  padding-top: 5px;
}

</style>