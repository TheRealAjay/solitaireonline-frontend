<script setup>
import background_image from "../assets/background.png";
import PlayingCard from "@/components/Card/PlayingCard.vue";
</script>

<template>
	<div class="gameView">
		<div class="gameView__playArea" :style="{backgroundImage:`url(${background_image})`}">
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--d"
				 data-position="d">
				<div class="drag-el"
					 v-for="(item, index) in stackZero"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: index * 0 + 'px'}"
					 :data-card-index="index"
					 :data-card-pos="item.position"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackZero)">
					<PlayingCard :type="item.type" :value="item.value" :flipped="false" id="" stack="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--df"
				 data-position="df">
				<div class="drag-el"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackOne)">
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--c1"
				 data-position="c1">
				<div class="drag-el"
					 v-for="(item, index) in stackTwo"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: index * 25 + 'px'}"
					 :data-card-index="index"
					 :data-card-pos="item.position"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackTwo)">
					<PlayingCard :card-pos="index" :type="item.type" :value="item.value" :flipped="item.flipped" id=""
								 stack="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--c2"
				 data-position="c2">
				<div class="drag-el"
					 v-for="(item, index) in stackThree"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: index * 25 + 'px'}"
					 :data-card-index="index"
					 :data-card-pos="item.position"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackThree)">
					<PlayingCard :card-pos="index" :type="item.type" :value="item.value" :flipped="item.flipped" id=""
								 stack="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--c3"
				 data-position="c3">
				<div class="drag-el"
					 v-for="(item, index) in stackFour"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: index * 25 + 'px'}"
					 :data-card-index="index"
					 :data-card-pos="item.position"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackFour)">
					<PlayingCard :card-pos="index" :type="item.type" :value="item.value" :flipped="item.flipped" id=""
								 stack="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--c4"
				 data-position="c4">
				<div class="drag-el"
					 v-for="(item, index) in stackFive"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: index * 25 + 'px'}"
					 :data-card-index="index"
					 :data-card-pos="item.position"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackFive)">
					<PlayingCard :card-pos="index" :type="item.type" :value="item.value" :flipped="item.flipped" id=""
								 stack="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--c5"
				 data-position="c5">
				<div class="drag-el"
					 v-for="(item, index) in stackSix"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: index * 25 + 'px'}"
					 :data-card-index="index"
					 :data-card-pos="item.position"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackSix)">
					<PlayingCard :card-pos="index" :type="item.type" :value="item.value" :flipped="item.flipped" id=""
								 stack="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--c6"
				 data-position="c6">
				<div class="drag-el"
					 v-for="(item, index) in stackSeven"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: index * 25 + 'px'}"
					 :data-card-index="index"
					 :data-card-pos="item.position"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackSeven)">
					<PlayingCard :card-pos="index" :type="item.type" :value="item.value" :flipped="item.flipped" id=""
								 stack="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--c7"
				 data-position="c7">
				<div class="drag-el"
					 v-for="(item, index) in stackEight"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: index * 25 + 'px'}"
					 :data-card-index="index"
					 :data-card-pos="item.position"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackEight)">
					<PlayingCard :card-pos="index" :type="item.type" :value="item.value" :flipped="item.flipped" id=""
								 stack="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--b1"
				 data-position="b1">
				<div class="drag-el"
					 v-for="(item, index) in stackNine"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: index * 0 + 'px'}"
					 :data-card-index="index"
					 :data-card-pos="item.position"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackNine)">
					<PlayingCard :card-pos="index" :type="item.type" :value="item.value" :flipped="item.flipped" id=""
								 stack="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--b2"
				 data-position="b2">
				<div class="drag-el"
					 v-for="(item, index) in stackTen"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: index * 0 + 'px'}"
					 :data-card-index="index"
					 :data-card-pos="item.position"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackTen)">
					<PlayingCard :card-pos="index" :type="item.type" :value="item.value" :flipped="item.flipped" id=""
								 stack="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--b3"
				 data-position="b3">
				<div class="drag-el"
					 v-for="(item, index) in stackEleven"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: index * 0 + 'px'}"
					 :data-card-index="index"
					 :data-card-pos="item.position"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackEleven)">
					<PlayingCard :card-pos="index" :type="item.type" :value="item.value" :flipped="item.flipped" id=""
								 stack="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--b4"
				 data-position="b4">
				<div class="drag-el"
					 v-for="(item, index) in stackTwelve"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: index * 0 + 'px'}"
					 :data-card-index="index"
					 :data-card-pos="item.position"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackTwelve)">
					<PlayingCard :type="item.type" :value="item.value" :flipped="item.flipped" id=""
								 stack="" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>

import config from "../../config";

/**
 * Karten mit flipped false dürfen nicht draggable sein.
 *
 * TODO: stacks durch positionen ersetzen
 */
export default {
	data() {
		return {
			cardObjects: [],
			selectedCards: null,
			targetStack: null,
		}
	},
	beforeMount() {
		localStorage.SessionID = 0;
		const headerObj = {
			"Content-Type": "application/json",
			"Accept": "*/*",
			"Authorization": `Bearer ${localStorage.BearerToken}`,
		}

		const getSession = {
			method: 'GET',
			headers: headerObj
		};
		fetch(config.api.url + '/Session/get', getSession).then(async response => {
			const isJson = response.headers.get('content-type')?.includes('application/json');
			const data = isJson && await response.json();

			if (response.ok) {
				localStorage.SessionID = parseInt(data.id);
			}

			if (!response.ok) {
				localStorage.SessionID = 0;
				const error = (data && data.message) || response.status;
				return Promise.reject(error);
			}
		}).catch(error => {
			console.error("There was an error!", error);
		}).then(() => {
			if (parseInt(localStorage.SessionID) === 0) {
				const postSession = {
					method: 'POST',
					headers: headerObj
				};
				fetch(config.api.url + '/Session/create', postSession).then(async response => {
					const isJson = response.headers.get('content-type')?.includes('application/json');
					const data = isJson && await response.json();

					if (data) {
						localStorage.SessionID = parseInt(data.id);
					}
				}).catch(error => {
					console.error("There was an error!", error);
				}).then(() => {
					callGameInit(this);
				});
			} else if (parseInt(localStorage.SessionID) !== 0) {
				callGameInit(this);
			}
		});

		function callGameInit(obj) {
			const initGame = {
				method: 'POST',
				headers: headerObj,
				body: JSON.stringify({
					solitaireSessionId: localStorage.SessionID
				})
			}

			fetch(config.api.url + '/Game/getCards', initGame).then(async response => {
				const isJson = response.headers.get('content-type')?.includes('application/json');
				const data = isJson && await response.json();
				if (response.ok) {
					obj.cardObjects = data;
				}

				// check for error response
				if (!response.ok) {
					// get error message from body or default to response status
					const error = (data && data.message) || response.status;
					return Promise.reject(error);
				}
			}).then(() => {
				if (obj.cardObjects.length === 0) {
					fetch(config.api.url + '/Game/initialize', initGame).then(async response => {
						const isJson = response.headers.get('content-type')?.includes('application/json');
						const data = isJson && await response.json();
						if (response.ok) {
							obj.cardObjects = data;
						}

						// check for error response
						if (!response.ok) {
							// get error message from body or default to response status
							const error = (data && data.message) || response.status;
							return Promise.reject(error);
						}
					});
				}
			});
		}
	},
	name: "GameView",
	computed: {
		stackZero() {
			const filteredStackZero = this.cardObjects.filter((item) => item.position.startsWith("d"))
			return this.orderByValue(filteredStackZero)
		},
		stackTwo() {
			const filteredStackTwo = this.cardObjects.filter((item) => item.position.startsWith("c1"))
			return this.orderByValue(filteredStackTwo)
		},
		stackThree() {
			const filteredStackThree = this.cardObjects.filter((item) => item.position.startsWith("c2"))
			return this.orderByValue(filteredStackThree)
		},
		stackFour() {
			const filteredStackFour = this.cardObjects.filter((item) => item.position.startsWith("c3"))
			return this.orderByValue(filteredStackFour)
		},
		stackFive() {
			const filteredStackFive = this.cardObjects.filter((item) => item.position.startsWith("c4"))
			return this.orderByValue(filteredStackFive)
		},
		stackSix() {
			const filteredStackSix = this.cardObjects.filter((item) => item.position.startsWith("c5"))
			return this.orderByValue(filteredStackSix)
		},
		stackSeven() {
			const filteredStackSeven = this.cardObjects.filter((item) => item.position.startsWith("c6"))
			return this.orderByValue(filteredStackSeven)
		},
		stackEight() {
			const filteredStackEight = this.cardObjects.filter((item) => item.position.startsWith("c7"))
			return this.orderByValue(filteredStackEight)
		},
		stackNine() {
			const filteredStackNine = this.cardObjects.filter((item) => item.position.startsWith("b1"))
			return this.orderByValueDESC(filteredStackNine)
		},
		stackTen() {
			const filteredStackTen = this.cardObjects.filter((item) => item.position.startsWith("b2"))
			return this.orderByValueDESC(filteredStackTen)
		},
		stackEleven() {
			const filteredStackEleven = this.cardObjects.filter((item) => item.position.startsWith("b3"))
			return this.orderByValueDESC(filteredStackEleven)
		},
		stackTwelve() {
			const filteredStackTwelve = this.cardObjects.filter((item) => item.position.startsWith("b4"))
			return this.orderByValueDESC(filteredStackTwelve)
		},
	},
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
				this.targetStack = elem.dataset.position;
			} else {
				this.targetStack = null;
			}
		},
		endDrag(e) {
			document.removeEventListener("mousemove", this.onDrag);
			document.removeEventListener("mouseup", this.endDrag);

			const fromPosition = this.selectedCards[0].position;
			let targetStackNode;

			for (const stack of document.getElementsByClassName("gameView__playArea__drawDeck__holder")) {
				if (stack.dataset.position.includes(this.targetStack)) {
					targetStackNode = stack;
				}
			}

			if (!this.targetStack) {
				this.selectedCards.forEach((card) => {
					this.resetCardPos(card, parseInt(card.position.split("r")[1]) - 1)
				});
				return;
			}

			let body = '';
			if (this.selectedCards.length <= 1) {
				body = JSON.stringify({
					fromPosition: fromPosition,
					toPosition: this.targetStack + "r" + (targetStackNode.childElementCount + 1),
					solitaireSessionId: localStorage.SessionID
				});
			} else {
				let cards = [];
				let i = 1;
				for (const card of this.selectedCards) {
					cards.push({
						fromPosition: card.position,
						toPosition: this.targetStack + "r" + (targetStackNode.childElementCount + i),
						solitaireSessionId: localStorage.SessionID
					})
					i++;
				}
				body = JSON.stringify(cards);
			}

			const moveCard = {
				method: 'POST',
				headers: {
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Authorization": `Bearer ${localStorage.BearerToken}`,
				},
				body: body
			};

			const reqURL = this.selectedCards.length > 1 ? '/Game/moveMore' : '/Game/move';

			fetch(config.api.url + reqURL, moveCard).then(async response => {
				const isJson = response.headers.get('content-type')?.includes('application/json');
				const data = isJson && await response.json();

				if (response.ok) {
					if (data === true) {
						let firstCardPos = this.selectedCards[0].position.split("r");
						let beforeCardPos = firstCardPos[0] + "r" + (parseInt(firstCardPos[1]) - 1);
						let flipReqBody = {
							position: beforeCardPos,
							solitaireSessionId: localStorage.SessionID
						}
						this.selectedCards.forEach((card, index) => {
							card.position = this.targetStack + "r" + (targetStackNode.childElementCount + (index + 1));
						});
						this.cardObjects = this.cardObjects.map((card) => {
							const updatedCard = this.selectedCards.find((c) => c.id === card.id);
							return updatedCard ? updatedCard : card;
						});
						const flipCardReq = {
							method: 'POST',
							headers: {
								"Content-Type": "application/json",
								"Accept": "*/*",
								"Authorization": `Bearer ${localStorage.BearerToken}`,
							},
							body: JSON.stringify(flipReqBody)
						}
						fetch(config.api.url + "/Game/flip", flipCardReq).then(async response => {
							const data = isJson && await response.json();
							if (data) {
								let flipCard = this.cardObjects.find((card) => card.position === beforeCardPos);
								this.cardObjects = this.cardObjects.map((card) => {
									if (card.id === flipCard.id) {
										card.flipped = true;
									}
									return card;
								});
							}
						});
					} else {
						this.selectedCards.forEach((card) => {
							this.resetCardPos(card, parseInt(card.position.split("r")[1]) - 1)
						});
						return;
					}
				}

				// check for error response
				if (!response.ok) {
					const error = (data && data.message) || response.status;
					return Promise.reject(error);
				}
			}).catch(error => {
				console.error("There was an error!", error);
			});
		},
		moveCard(card, index, clientX, clientY) {
			const elem = document.getElementById('card-' + card.id);
			elem.style.position = 'fixed';
			elem.style.left = clientX - (elem.getBoundingClientRect().width / 2) + 'px';
			elem.style.top = clientY - (elem.getBoundingClientRect().height / 2) + index * 25 + 'px';
			elem.style.width = 90 + 'px';
			elem.style.height = 120 + 'px';
			elem.style.zIndex = 999;
		},
		resetCardPos(card, index) {
			const elem = document.getElementById('card-' + card.id);
			elem.style.position = null;
			elem.style.left = null;
			elem.style.top = index * 25 + 'px';
			elem.style.width = null;
			elem.style.height = null;
			elem.style.zIndex = null;
		},
		orderByValue(stack) {
			return stack.slice().sort((a, b) => parseInt(a.position.split("r")[1]) - parseInt(b.position.split("r")[1]));
		},
		orderByValueDESC(stack) {
			return stack.slice().sort((a, b) => parseInt(b.position.split("r")[1]) - parseInt(a.position.split("r")[1]));
		},
	},
}
</script>

<style scoped>

.drag-el {
	position    : absolute;
	width       : 100%;
	height      : 100%;
	align-items : center;
}

</style>