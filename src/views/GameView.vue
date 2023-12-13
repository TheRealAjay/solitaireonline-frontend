<script setup>
import background_image from "../assets/background.png";
import PlayingCard from "@/components/Card/PlayingCard.vue";

import {ref, onMounted} from 'vue'

</script>

<template>
	<div class="gameView">
		<div class="gameView__playArea" :style="{backgroundImage:`url(${background_image})`}">
			<div class="gameView__playArea__drawDeck__holder" @drop="onDrop($event, 1)" @dragover.prevent
				 @dragenter.prevent>
				<div
					class="drag-el"
					v-for="item in stackOne"
					:key="item.id"
					draggable="true"
					@dragstart="startDrag($event, item)">
					<PlayingCard :type="item.type" :value="item.value" :flipped="item.flipped" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__dropZone" @drop="onDrop($event, 2)" @dragover.prevent
				 @dragenter.prevent>
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


/**
 * Karten mit flipped false dürfen nicht draggable sein.
 *
 * TODO: stacks durch positionen ersetzen
 */


export default {

	data() {
		return {
			cardObjects: [
				{
					"id": 1,
					"type": "Heart",
					"value": "9",
					"position": "d1",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 1,
				},
				{
					"id": 2,
					"type": "Spade",
					"value": "11",
					"position": "d2",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 1,
				},
				{
					"id": 3,
					"type": "Spade",
					"value": "10",
					"position": "d3",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 2,
				},
				{
					"id": 4,
					"type": "Spade",
					"value": "1",
					"position": "d4",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 1,
				},
				{
					"id": 5,
					"type": "Heart",
					"value": "6",
					"position": "d5",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 2,
				},
				{
					"id": 6,
					"type": "Spade",
					"value": "9",
					"position": "d6",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 1,
				},
				{
					"id": 7,
					"type": "Diamond",
					"value": "11",
					"position": "d7",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 2,
				},
				{
					"id": 8,
					"type": "Clover",
					"value": "7",
					"position": "d8",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 1,
				},
				{
					"id": 9,
					"type": "Clover",
					"value": "1",
					"position": "d9",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 10,
					"type": "Spade",
					"value": "8",
					"position": "d10",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 11,
					"type": "Heart",
					"value": "3",
					"position": "d11",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 12,
					"type": "Heart",
					"value": "10",
					"position": "d12",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 13,
					"type": "Diamond",
					"value": "13",
					"position": "d13",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 14,
					"type": "Heart",
					"value": "12",
					"position": "d14",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 15,
					"type": "Clover",
					"value": "2",
					"position": "d15",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 16,
					"type": "Diamond",
					"value": "8",
					"position": "d16",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 17,
					"type": "Spade",
					"value": "3",
					"position": "d17",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 18,
					"type": "Spade",
					"value": "12",
					"position": "d18",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 19,
					"type": "Diamond",
					"value": "1",
					"position": "d19",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 20,
					"type": "Clover",
					"value": "10",
					"position": "d20",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 21,
					"type": "Diamond",
					"value": "2",
					"position": "d21",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 22,
					"type": "Clover",
					"value": "12",
					"position": "d22",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 23,
					"type": "Spade",
					"value": "13",
					"position": "d23",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 24,
					"type": "Spade",
					"value": "2",
					"position": "d24",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 25,
					"type": "Heart",
					"value": "13",
					"position": "c1r1",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 26,
					"type": "Clover",
					"value": "11",
					"position": "c2r1",
					"flipped": false,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 27,
					"type": "Clover",
					"value": "4",
					"position": "c2r2",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 28,
					"type": "Heart",
					"value": "7",
					"position": "c3r1",
					"flipped": false,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 29,
					"type": "Spade",
					"value": "4",
					"position": "c3r2",
					"flipped": false,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 30,
					"type": "Heart",
					"value": "A",
					"position": "c3r3",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 31,
					"type": "Spade",
					"value": "5",
					"position": "c4r1",
					"flipped": false,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 32,
					"type": "Clover",
					"value": "3",
					"position": "c4r2",
					"flipped": false,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 33,
					"type": "Spade",
					"value": "7",
					"position": "c4r3",
					"flipped": false,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 34,
					"type": "Diamond",
					"value": "3",
					"position": "c4r4",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 35,
					"type": "Diamond",
					"value": "6",
					"position": "c5r1",
					"flipped": false,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 36,
					"type": "Diamond",
					"value": "12",
					"position": "c5r2",
					"flipped": false,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 37,
					"type": "Diamond",
					"value": "5",
					"position": "c5r3",
					"flipped": false,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 38,
					"type": "Diamond",
					"value": "7",
					"position": "c5r4",
					"flipped": false,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 39,
					"type": "Diamond",
					"value": "4",
					"position": "c5r5",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 40,
					"type": "Heart",
					"value": "4",
					"position": "c6r1",
					"flipped": false,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 41,
					"type": "Clover",
					"value": "9",
					"position": "c6r2",
					"flipped": false,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 42,
					"type": "Heart",
					"value": "8",
					"position": "c6r3",
					"flipped": false,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 43,
					"type": "Clover",
					"value": "13",
					"position": "c6r4",
					"flipped": false,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 44,
					"type": "Clover",
					"value": "8",
					"position": "c6r5",
					"flipped": false,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 45,
					"type": "Heart",
					"value": "11",
					"position": "c6r6",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 46,
					"type": "Heart",
					"value": "2",
					"position": "c7r1",
					"flipped": false,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 47,
					"type": "Clover",
					"value": "5",
					"position": "c7r2",
					"flipped": false,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 48,
					"type": "Heart",
					"value": "5",
					"position": "c7r3",
					"flipped": false,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 49,
					"type": "Diamond",
					"value": "10",
					"position": "c7r4",
					"flipped": false,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 50,
					"type": "Diamond",
					"value": "9",
					"position": "c7r5",
					"flipped": false,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 51,
					"type": "Spade",
					"value": "6",
					"position": "c7r6",
					"flipped": false,
					"solitaireSessionId": 2,
					"solitaireSession": null
				},
				{
					"id": 52,
					"type": "Clover",
					"value": "6",
					"position": "c7r7",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null
				}
			]
		}
	},

	computed: {
		stackOne() {
			const filteredStackOne = this.cardObjects.filter((item) => item.stack === 1)
			return this.orderByValue(filteredStackOne)
		},
		stackTwo() {
			const filteredStackTwo = this.cardObjects.filter((item) => item.stack === 2)
			return this.orderByValue(filteredStackTwo)
		},
	},

	name: "GameView",
	methods: {
		startDrag(evt, item) {
			evt.dataTransfer.dropEffect = 'move'
			evt.dataTransfer.effectAllowed = 'move'
			evt.dataTransfer.setData('itemID', item.id)
		},
		onDrop(evt, stack) {
			const itemID = parseInt(evt.dataTransfer.getData('itemID'));
			const item = this.cardObjects.find((cardObj) => cardObj.id === itemID);
			item.stack = stack;
		},
		orderByValue(stack) {
    		return stack.slice().sort((a, b) => b.value - a.value);
  		},
	},
}
</script>

<style scoped>

.drag-el {
	padding-bottom : 30px;
}

</style>