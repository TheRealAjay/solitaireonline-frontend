<script setup>
import background_image from "../assets/background.png";
import PlayingCard from "@/components/Card/PlayingCard.vue";
</script>

<template>
	<div class="gameView">
		<div class="gameView__playArea" :style="{backgroundImage:`url(${background_image})`}">
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder" data-stack="1">
				<div class="drag-el"
					 v-for="(item, index) in stackOne"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: index * 0 + 'px'}"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackOne)">
					<PlayingCard :type="item.type" :value="item.value" :flipped="false" id="" stack="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--df" data-stack="1">
				<div class="drag-el"
					 v-for="(item, index) in stackOne"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: index * 0 + 'px'}"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackOne)">
					<PlayingCard :type="item.type" :value="item.value" :flipped="true" id="" stack="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--c1"
				 data-stack="2">
				<div class="drag-el"
					 v-for="(item, index) in stackTwo"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: index * 25 + 'px'}"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackTwo)">
					<PlayingCard :type="item.type" :value="item.value" :flipped="item.flipped" id="" stack="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--c2"
				 data-stack="3">
				<div class="drag-el"
					 v-for="(item, index) in stackThree"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: index * 25 + 'px'}"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackThree)">
					<PlayingCard :type="item.type" :value="item.value" :flipped="item.flipped" id="" stack="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--c3"
				 data-stack="4">
				<div class="drag-el"
					 v-for="(item, index) in stackFour"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: index * 25 + 'px'}"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackFour)">
					<PlayingCard :type="item.type" :value="item.value" :flipped="item.flipped" id="" stack="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--c4"
				 data-stack="5">
				<div class="drag-el"
					 v-for="(item, index) in stackFive"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: index * 25 + 'px'}"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackFive)">
					<PlayingCard :type="item.type" :value="item.value" :flipped="item.flipped" id="" stack="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--c5"
				 data-stack="6">
				<div class="drag-el"
					 v-for="(item, index) in stackSix"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: index * 25 + 'px'}"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackSix)">
					<PlayingCard :type="item.type" :value="item.value" :flipped="item.flipped" id="" stack="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--c6"
				 data-stack="7">
				<div class="drag-el"
					 v-for="(item, index) in stackSeven"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: index * 25 + 'px'}"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackSeven)">
					<PlayingCard :type="item.type" :value="item.value" :flipped="item.flipped" id="" stack="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--c7"
				 data-stack="8">
				<div class="drag-el"
					 v-for="(item, index) in stackEight"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: index * 25 + 'px'}"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackEight)">
					<PlayingCard :type="item.type" :value="item.value" :flipped="item.flipped" id="" stack="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--b1"
				 data-stack="9">
				<div class="drag-el"
					 v-for="(item, index) in stackNine"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: index * 25 + 'px'}"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackNine)">
					<PlayingCard :type="item.type" :value="item.value" :flipped="item.flipped" id="" stack="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--b2"
				 data-stack="10">
				<div class="drag-el"
					 v-for="(item, index) in stackTen"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: index * 25 + 'px'}"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackTen)">
					<PlayingCard :type="item.type" :value="item.value" :flipped="item.flipped" id="" stack="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--b3"
				 data-stack="11">
				<div class="drag-el"
					 v-for="(item, index) in stackEleven"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: index * 25 + 'px'}"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackEleven)">
					<PlayingCard :type="item.type" :value="item.value" :flipped="item.flipped" id="" stack="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--b4"
				 data-stack="12">
				<div class="drag-el"
					 v-for="(item, index) in stackTwelve"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: index * 25 + 'px'}"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackTwelve)">
					<PlayingCard :type="item.type" :value="item.value" :flipped="item.flipped" id="" stack="" />
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
					stack: 1,
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
					stack: 1,
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
					stack: 1,
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
					"solitaireSession": null,
					stack: 1,
				},
				{
					"id": 10,
					"type": "Spade",
					"value": "8",
					"position": "d10",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 1,
				},
				{
					"id": 11,
					"type": "Heart",
					"value": "3",
					"position": "d11",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 1,
				},
				{
					"id": 12,
					"type": "Heart",
					"value": "10",
					"position": "d12",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 1,
				},
				{
					"id": 13,
					"type": "Diamond",
					"value": "13",
					"position": "d13",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 1,
				},
				{
					"id": 14,
					"type": "Heart",
					"value": "12",
					"position": "d14",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 1,
				},
				{
					"id": 15,
					"type": "Clover",
					"value": "2",
					"position": "d15",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 1,
				},
				{
					"id": 16,
					"type": "Diamond",
					"value": "8",
					"position": "d16",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 1,
				},
				{
					"id": 17,
					"type": "Spade",
					"value": "3",
					"position": "d17",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 1,
				},
				{
					"id": 18,
					"type": "Spade",
					"value": "12",
					"position": "d18",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 1,
				},
				{
					"id": 19,
					"type": "Diamond",
					"value": "1",
					"position": "d19",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 1,
				},
				{
					"id": 20,
					"type": "Clover",
					"value": "10",
					"position": "d20",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 1,
				},
				{
					"id": 21,
					"type": "Diamond",
					"value": "2",
					"position": "d21",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 1,
				},
				{
					"id": 22,
					"type": "Clover",
					"value": "12",
					"position": "d22",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 1,
				},
				{
					"id": 23,
					"type": "Spade",
					"value": "13",
					"position": "d23",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 1,
				},
				{
					"id": 24,
					"type": "Spade",
					"value": "2",
					"position": "d24",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 1,
				},
				{
					"id": 25,
					"type": "Heart",
					"value": "13",
					"position": "c1r1",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 2,
				},
				{
					"id": 26,
					"type": "Clover",
					"value": "11",
					"position": "c2r1",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 3,
				},
				{
					"id": 27,
					"type": "Clover",
					"value": "4",
					"position": "c2r2",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 3,
				},
				{
					"id": 28,
					"type": "Heart",
					"value": "7",
					"position": "c3r1",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 4,
				},
				{
					"id": 29,
					"type": "Spade",
					"value": "4",
					"position": "c3r2",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 4,
				},
				{
					"id": 30,
					"type": "Heart",
					"value": "1",
					"position": "c3r3",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 4,
				},
				{
					"id": 31,
					"type": "Spade",
					"value": "5",
					"position": "c4r1",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 5,
				},
				{
					"id": 32,
					"type": "Clover",
					"value": "3",
					"position": "c4r2",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 5,
				},
				{
					"id": 33,
					"type": "Spade",
					"value": "7",
					"position": "c4r3",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 5,
				},
				{
					"id": 34,
					"type": "Diamond",
					"value": "3",
					"position": "c4r4",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 5,
				},
				{
					"id": 35,
					"type": "Diamond",
					"value": "6",
					"position": "c5r1",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 6,
				},
				{
					"id": 36,
					"type": "Diamond",
					"value": "12",
					"position": "c5r2",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 6,
				},
				{
					"id": 37,
					"type": "Diamond",
					"value": "5",
					"position": "c5r3",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 6,
				},
				{
					"id": 38,
					"type": "Diamond",
					"value": "7",
					"position": "c5r4",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 6,
				},
				{
					"id": 39,
					"type": "Diamond",
					"value": "4",
					"position": "c5r5",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 6,
				},
				{
					"id": 40,
					"type": "Heart",
					"value": "4",
					"position": "c6r1",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 7,
				},
				{
					"id": 41,
					"type": "Clover",
					"value": "9",
					"position": "c6r2",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 7,
				},
				{
					"id": 42,
					"type": "Heart",
					"value": "8",
					"position": "c6r3",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 7,
				},
				{
					"id": 43,
					"type": "Clover",
					"value": "13",
					"position": "c6r4",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 7,
				},
				{
					"id": 44,
					"type": "Clover",
					"value": "8",
					"position": "c6r5",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 7,
				},
				{
					"id": 45,
					"type": "Heart",
					"value": "11",
					"position": "c6r6",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 7,
				},
				{
					"id": 46,
					"type": "Heart",
					"value": "2",
					"position": "c7r1",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 8,
				},
				{
					"id": 47,
					"type": "Clover",
					"value": "5",
					"position": "c7r2",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 8,
				},
				{
					"id": 48,
					"type": "Heart",
					"value": "5",
					"position": "c7r3",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 8,
				},
				{
					"id": 49,
					"type": "Diamond",
					"value": "10",
					"position": "c7r4",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 8,
				},
				{
					"id": 50,
					"type": "Diamond",
					"value": "9",
					"position": "c7r5",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 8,
				},
				{
					"id": 51,
					"type": "Spade",
					"value": "6",
					"position": "c7r6",
					"flipped": true,
					"solitaireSessionId": 2,
					"solitaireSession": null,
					stack: 8,
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
			],
			selectedCards: null,
			targetStack: null,
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
		stackThree() {
			const filteredStackThree = this.cardObjects.filter((item) => item.stack === 3)
			return this.orderByValue(filteredStackThree)
		},
		stackFour() {
			const filteredStackFour = this.cardObjects.filter((item) => item.stack === 4)
			return this.orderByValue(filteredStackFour)
		},
		stackFive() {
			const filteredStackFive = this.cardObjects.filter((item) => item.stack === 5)
			return this.orderByValue(filteredStackFive)
		},
		stackSix() {
			const filteredStackSix = this.cardObjects.filter((item) => item.stack === 6)
			return this.orderByValue(filteredStackSix)
		},
		stackSeven() {
			const filteredStackSeven = this.cardObjects.filter((item) => item.stack === 7)
			return this.orderByValue(filteredStackSeven)
		},
		stackEight() {
			const filteredStackEight = this.cardObjects.filter((item) => item.stack === 8)
			return this.orderByValue(filteredStackEight)
		},
		stackNine() {
			const filteredStackNine = this.cardObjects.filter((item) => item.stack === 9)
			return this.orderByValue(filteredStackNine)
		},
		stackTen() {
			const filteredStackTen = this.cardObjects.filter((item) => item.stack === 10)
			return this.orderByValue(filteredStackTen)
		},
		stackEleven() {
			const filteredStackEleven = this.cardObjects.filter((item) => item.stack === 11)
			return this.orderByValue(filteredStackEleven)
		},
		stackTwelve() {
			const filteredStackTwelve = this.cardObjects.filter((item) => item.stack === 12)
			return this.orderByValue(filteredStackTwelve)
		},
	},
	name: "GameView",
	methods: {
		startDrag(evt, item, index, stack) {
			this.selectedCards = stack.slice(index).filter(card => parseInt(card.value) <= parseInt(item.value));
			document.addEventListener("mousemove", this.onDrag);
			document.addEventListener("mouseup", this.endDrag);
		},
		onDrag(e) {
			let {clientX, clientY} = e;
			this.selectedCards.forEach((card, index) => {
				this.moveCard(card, index, clientX, clientY);
			});
			const elem = document.elementsFromPoint(clientX, clientY).filter(element => element.classList.contains('gameView__playArea__drawDeck__holder'))[0]
			if (elem) {
				this.targetStack = parseInt(elem.dataset.stack);
			} else {
				this.targetStack = null;
			}
		},
		endDrag(e) {
			document.removeEventListener("mousemove", this.onDrag);
			document.removeEventListener("mouseup", this.endDrag);

			this.selectedCards.forEach((card, index) => {
				const elem = document.getElementById('card-' + card.id);
				elem.style.position = 'absolute';
				elem.style.left = 0 + 'px';
				elem.style.top = index * 45 + 'px';
				card.stack = this.targetStack ?? card.stack;
			});

			this.cardObjects = this.cardObjects.map((card) => {
				const updatedCard = this.selectedCards.find((c) => c.id === card.id);
				return updatedCard ? {...card, stack: updatedCard.stack} : card;
			});
		},
		moveCard(card, index, clientX, clientY) {
			const elem = document.getElementById('card-' + card.id);
			elem.style.position = 'fixed';
			elem.style.left = clientX - (elem.getBoundingClientRect().width / 2) + 'px';
			elem.style.top = clientY - (elem.getBoundingClientRect().height / 2) + index * 45 + 'px';
			elem.style.width = 90 + 'px';
			elem.style.height = 120 + 'px';
		},
		orderByValue(stack) {
			return stack.slice().sort((a, b) => b.value - a.value);
		},
	},
}
</script>

<style scoped>

.drag-el {
	position: absolute;
	width    : 100%;
	height   : 100%;
	align-items: center;
}

</style>