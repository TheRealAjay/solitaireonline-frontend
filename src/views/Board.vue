<script setup>
import background_image from "../assets/background.png";
import PlayingCard from "@/components/Card/PlayingCard.vue";
</script>

<template>
	<div class="navigation">
		<div class="FABMenu">
			<input type="checkbox" checked />
			<div class="hamburger">
				<div class="dots">
					<span class="first"></span>
					<span class="second"></span>
					<span class="third"></span>
				</div>
			</div>
			<div class="action_items_bar">
				<div class="action_items">
					<span class="first_item"><i class="material-icons">favorite</i></span>
					<span class="second_item"><i class="material-icons">chat</i></span>
					<span class="third_item"><i class="material-icons">get_app</i></span>
					<span class="fourth_item"><i class="material-icons">share</i></span>
				</div>
			</div>
		</div>
	</div>
	<div class="gameView">
		<div class="gameView__playArea" :style="{backgroundImage:`url(${background_image})`}">
			<div id="loading_overlay" class="loading">
				<div class="loading__loader">
					<div class="loading__loader__bar1"></div>
					<div class="loading__loader__bar2"></div>
					<div class="loading__loader__bar3"></div>
					<div class="loading__loader__bar4"></div>
					<div class="loading__loader__bar5"></div>
					<div class="loading__loader__bar6"></div>
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--d"
				 data-position="d">
				<div class="drag-el"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @click="resetDrawDeck">
					Peepee poopoo
				</div>
				<div class="drag-el"
					 v-for="(item, index) in stackZero"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: 0 + 'px'}"
					 :data-card-index="index"
					 :data-card-pos="item.position"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @click="clickedCard($event, item)">
					<PlayingCard :card-pos="index" :type="item.type" :value="item.value" :flipped="item.flipped" id=""
								 stack="" position="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--df"
				 data-position="df">
				<div class="drag-el"
					 v-for="(item, index) in stackOne"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{left: ((index % 3 === 0) ? 0 : (index % 3 === 1) ? 25 : 50) + 'px'}"
					 :data-card-index="index"
					 :data-card-pos="item.position"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackOne)">
					<PlayingCard :card-pos="index" :type="item.type" :value="item.value" :flipped="item.flipped" id=""
								 stack="" position="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--c1"
				 data-position="c1">
				<div class="drag-el"
					 v-for="(item, index) in stackTwo"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: index * 45 + 'px'}"
					 :data-card-index="index"
					 :data-card-pos="item.position"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackTwo)">
					<PlayingCard :card-pos="index" :type="item.type" :value="item.value" :flipped="item.flipped" id=""
								 stack="" position="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--c2"
				 data-position="c2">
				<div class="drag-el"
					 v-for="(item, index) in stackThree"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: index * 45 + 'px'}"
					 :data-card-index="index"
					 :data-card-pos="item.position"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackThree)">
					<PlayingCard :card-pos="index" :type="item.type" :value="item.value" :flipped="item.flipped" id=""
								 stack="" position="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--c3"
				 data-position="c3">
				<div class="drag-el"
					 v-for="(item, index) in stackFour"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: index * 45 + 'px'}"
					 :data-card-index="index"
					 :data-card-pos="item.position"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackFour)">
					<PlayingCard :card-pos="index" :type="item.type" :value="item.value" :flipped="item.flipped" id=""
								 stack="" position="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--c4"
				 data-position="c4">
				<div class="drag-el"
					 v-for="(item, index) in stackFive"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: index * 45 + 'px'}"
					 :data-card-index="index"
					 :data-card-pos="item.position"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackFive)">
					<PlayingCard :card-pos="index" :type="item.type" :value="item.value" :flipped="item.flipped" id=""
								 stack="" position="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--c5"
				 data-position="c5">
				<div class="drag-el"
					 v-for="(item, index) in stackSix"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: index * 45 + 'px'}"
					 :data-card-index="index"
					 :data-card-pos="item.position"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackSix)">
					<PlayingCard :card-pos="index" :type="item.type" :value="item.value" :flipped="item.flipped" id=""
								 stack="" position="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--c6"
				 data-position="c6">
				<div class="drag-el"
					 v-for="(item, index) in stackSeven"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: index * 45 + 'px'}"
					 :data-card-index="index"
					 :data-card-pos="item.position"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackSeven)">
					<PlayingCard :card-pos="index" :type="item.type" :value="item.value" :flipped="item.flipped" id=""
								 stack="" position="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--c7"
				 data-position="c7">
				<div class="drag-el"
					 v-for="(item, index) in stackEight"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: index * 45 + 'px'}"
					 :data-card-index="index"
					 :data-card-pos="item.position"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackEight)">
					<PlayingCard :card-pos="index" :type="item.type" :value="item.value" :flipped="item.flipped" id=""
								 stack="" position="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--b1"
				 data-position="b1">
				<div class="drag-el"
					 v-for="(item, index) in stackNine"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: 0 + 'px'}"
					 :data-card-index="index"
					 :data-card-pos="item.position"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackNine)">
					<PlayingCard :card-pos="index" :type="item.type" :value="item.value" :flipped="item.flipped" id=""
								 stack="" position="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--b2"
				 data-position="b2">
				<div class="drag-el"
					 v-for="(item, index) in stackTen"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: 0 + 'px'}"
					 :data-card-index="index"
					 :data-card-pos="item.position"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackTen)">
					<PlayingCard :card-pos="index" :type="item.type" :value="item.value" :flipped="item.flipped" id=""
								 stack="" position="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--b3"
				 data-position="b3">
				<div class="drag-el"
					 v-for="(item, index) in stackEleven"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: 0 + 'px'}"
					 :data-card-index="index"
					 :data-card-pos="item.position"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackEleven)">
					<PlayingCard :card-pos="index" :type="item.type" :value="item.value" :flipped="item.flipped" id=""
								 stack="" position="" />
				</div>
			</div>
			<div class="gameView__playArea__drawDeck__holder gameView__playArea__drawDeck__holder--b4"
				 data-position="b4">
				<div class="drag-el"
					 v-for="(item, index) in stackTwelve"
					 :id="'card-' + item.id"
					 :key="item.id"
					 :style="{top: 0 + 'px'}"
					 :data-card-index="index"
					 :data-card-pos="item.position"
					 @drag.prevent
					 @dragstart.prevent
					 @dragend.prevent
					 @dragover.prevent
					 @dragenter.prevent
					 @mousedown="startDrag($event, item, index, stackTwelve)">
					<PlayingCard :type="item.type" :value="item.value" :flipped="item.flipped" id=""
								 stack="" position="" />
				</div>
			</div>
			<div class="gameView__playArea__buttonDiv">
				<div class="gameView__playArea__buttonDiv__buttons">
					<button @click="restartGame()">Restart</button>
					<button @click="goBack()">Back</button>
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
	emits: ["changeView"],
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

			localStorage.SessionID = 0;
			if (response.status === 200) {
				localStorage.SessionID = parseInt(data.id);
			}

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
					this.callGameInit(headerObj);
				});
			} else if (parseInt(localStorage.SessionID) !== 0) {
				this.callGameInit(headerObj);
			}
		});
	},
	updated() {
		const cards = document.getElementsByClassName('gameView__playArea__drawDeck__holder');
		for (const elem of cards) {
			if (elem.dataset.position.startsWith("c")) {
				if (elem.children[0]) {
					const height = elem.children[0].children[0].getBoundingClientRect().height;
					elem.style.height = (height + ((elem.childElementCount - 1) * 25)) + 'px';
				}
			}
		}
	},
	name: "GameView",
	computed: {
		stackZero() {
			return this.orderByDrawStack(this.cardObjects.filter((item) => item.position.startsWith("d") && item.flipped === false))
		},
		stackOne() {
			return this.orderByDrawStackDESC(this.cardObjects.filter((item) => item.position.startsWith("d") && item.flipped === true))
		},
		stackTwo() {
			return this.orderByValue(this.cardObjects.filter((item) => item.position.startsWith("c1")))
		},
		stackThree() {
			return this.orderByValue(this.cardObjects.filter((item) => item.position.startsWith("c2")))
		},
		stackFour() {
			return this.orderByValue(this.cardObjects.filter((item) => item.position.startsWith("c3")))
		},
		stackFive() {
			return this.orderByValue(this.cardObjects.filter((item) => item.position.startsWith("c4")))
		},
		stackSix() {
			return this.orderByValue(this.cardObjects.filter((item) => item.position.startsWith("c5")))
		},
		stackSeven() {
			return this.orderByValue(this.cardObjects.filter((item) => item.position.startsWith("c6")))
		},
		stackEight() {
			return this.orderByValue(this.cardObjects.filter((item) => item.position.startsWith("c7")))
		},
		stackNine() {
			return this.orderByValue(this.cardObjects.filter((item) => item.position.startsWith("b1")))
		},
		stackTen() {
			return this.orderByValue(this.cardObjects.filter((item) => item.position.startsWith("b2")))
		},
		stackEleven() {
			return this.orderByValue(this.cardObjects.filter((item) => item.position.startsWith("b3")))
		},
		stackTwelve() {
			return this.orderByValue(this.cardObjects.filter((item) => item.position.startsWith("b4")))
		},
	},
	methods: {
		setWindow(viewIndex) {
			this.$emit('changeView', viewIndex)
		},
		goBack() {
			document.getElementById('loading_overlay').style.opacity = '1';
			const goBackBody = {
				solitaireSessionId: localStorage.SessionID
			};
			const goBackReq = {
				method: 'POST',
				headers: {
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Authorization": `Bearer ${localStorage.BearerToken}`,
				},
				body: JSON.stringify(goBackBody)
			};
			fetch(config.api.url + '/Game/back', goBackReq).then(async response => {
				this.selfReload();
			})
		},
		restartGame() {
			document.getElementById('loading_overlay').style.opacity = '1';
			const stopSessBody = {
				solitaireSessionId: localStorage.SessionID
			}
			const stopSessReq = {
				method: 'POST',
				headers: {
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Authorization": `Bearer ${localStorage.BearerToken}`,
				},
				body: JSON.stringify(stopSessBody)
			}
			const createSessReq = {
				method: 'POST',
				headers: {
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Authorization": `Bearer ${localStorage.BearerToken}`,
				}
			}
			fetch(config.api.url + '/Session/end', stopSessReq)
				.then(async response => {
					if (response.ok) {
						fetch(config.api.url + '/Session/create', createSessReq)
							.then(async response => {
								this.selfReload();
							});
					}
				});
		},
		resetDrawDeck() {
			const flipCardRequests = [];
			this.cardObjects = this.cardObjects.map((card) => {
				if (card.position.startsWith("d") && card.flipped === true) {
					flipCardRequests.push({
						position: card.position,
						solitaireSessionId: localStorage.SessionID
					})
					card.flipped = false;
				}
				return card;
			});
			const flipCardReq = {
				method: 'POST',
				headers: {
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Authorization": `Bearer ${localStorage.BearerToken}`,
				},
				body: JSON.stringify(flipCardRequests)
			}
			fetch(config.api.url + "/Game/flipMore", flipCardReq);
		},
		clickedCard(e, item) {
			const flipReqBody = {
				manualFlip: true,
				position: item.position,
				solitaireSessionId: localStorage.SessionID
			}
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
				const isJson = response.headers.get('content-type')?.includes('application/json');
				const data = isJson && await response.json();
				if (data) {
					let flipCard = this.cardObjects.find(c => c.position === item.position);
					this.cardObjects = this.cardObjects.map((card) => {
						if (card.id === flipCard.id) {
							card.flipped = true;
						}
						return card;
					});
				}
			});
		},
		startDrag(evt, item, index, stack) {
			this.selectedCards = stack.slice(index).filter(card => parseInt(card.value) <= parseInt(item.value));
			if (!this.selectedCards.find(card => card.flipped === false)) {
				document.addEventListener("mousemove", this.onDrag);
				document.addEventListener("mouseup", this.endDrag);
			}
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
							manualFlip: false,
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
							const isJson = response.headers.get('content-type')?.includes('application/json');
							const data = isJson && await response.json();
							if (data) {
								let flipCard = this.cardObjects.find(c => c.position === beforeCardPos);
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
			elem.style.top = clientY - (elem.getBoundingClientRect().height / 2) + index * 45 + 'px';
			elem.style.width = 90 + 'px';
			elem.style.height = 120 + 'px';
			elem.style.zIndex = 999;
		},
		resetCardPos(card, index) {
			const elem = document.getElementById('card-' + card.id);
			elem.style.position = null;
			elem.style.left = null;
			elem.style.top = index * 45 + 'px';
			elem.style.width = null;
			elem.style.height = null;
			elem.style.zIndex = null;
		},
		orderByValue(stack) {
			return stack.slice().sort((a, b) => parseInt(a.position.split("r")[1]) - parseInt(b.position.split("r")[1]));
		},
		orderByDrawStack(stack) {
			return stack.slice().sort((a, b) => parseInt(a.position.split("d")[1]) - parseInt(b.position.split("d")[1]));
		},
		orderByDrawStackDESC(stack) {
			return stack.slice().sort((b, a) => parseInt(a.position.split("d")[1]) - parseInt(b.position.split("d")[1]));
		},
		callGameInit(headerObj) {
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
					this.cardObjects = data;
				}

				// check for error response
				if (!response.ok) {
					// get error message from body or default to response status
					const error = (data && data.message) || response.status;
					return Promise.reject(error);
				}
			}).then(() => {
				if (this.cardObjects.length === 0) {
					fetch(config.api.url + '/Game/initialize', initGame).then(async response => {
						const isJson = response.headers.get('content-type')?.includes('application/json');
						const data = isJson && await response.json();
						if (response.ok && data.length > 0) {
							this.cardObjects = data;
							this.selfReload();
							document.getElementById('loading_overlay').style.opacity = '0';
						}

						// check for error response
						if (!response.ok) {
							// get error message from body or default to response status
							const error = (data && data.message) || response.status;
							return Promise.reject(error);
						}
					}).then();
				} else {
					document.getElementById('loading_overlay').style.opacity = '0';
				}
			});
		}
	},
	props: {
		selfReload: {}
	}
}
</script>

<style scoped>

.drag-el {
	position    : absolute;
	width       : 100%;
	height      : 100%;
	align-items : center;
}

.navigation {
	position : absolute;
	top      : 0;
	left     : 0;
	bottom   : 0;
	right    : 0;
	margin   : auto;
	width    : 100%;
	height   : 100%;
}

.FABMenu {
	position  : absolute;
	top       : 25px;
	left      : 50%;
	transform : translateX(-50%);
	z-index   : 999;
	margin    : auto;
	width     : 600px;
	height    : 200px;
}

.FABMenu input {
	position      : absolute;
	top           : 0%;
	left          : 50%;
	transform     : translateX(-50%);
	width         : 50px;
	height        : 50px;
	z-index       : 20;
	border-radius : 50px;
	opacity       : 0;
	cursor        : pointer;
}

.hamburger {
	position         : absolute;
	top              : 0%;
	left             : 50%;
	transform        : translateX(-50%);
	width            : 50px;
	height           : 50px;
	background-color : #e84f3e;
	border-radius    : 100%;
	box-shadow       : 0px 5px 20px rgba(0, 0, 0, 0.15);
	z-index          : 10;
	cursor           : pointer;
}

.dots span {
	position      : absolute;
	top           : 45%;
	width         : 7px;
	height        : 7px;
	border-radius : 7px;
	background    : #fff;
	z-index       : 20;
	transition    : all 0.3s ease-in-out;
}

.dots {
	display         : flex;
	justify-content : center;
}

.first {
	margin-right : 20px;
}

.third {
	margin-left : 20px;
}

.FABMenu input:checked ~ .hamburger .dots .first {
	top              : 15px;
	height           : 29px;
	transform-origin : top;
	transform        : rotate(-45deg);
	transition       : all 0.3s ease-in-out;
}

.FABMenu input:checked ~ .hamburger .dots .third {
	top              : 15px;
	height           : 29px;
	transform-origin : top;
	transform        : rotate(45deg);
	transition       : all 0.3s ease-in-out;
}

.action_items_bar {
	position         : absolute;
	top              : 4.5%;
	left             : 18%;
	width            : 380px;
	height           : 30px;
	background-color : #e84f3e;
	border-radius    : 60px;
	box-shadow       : 0px 5px 20px #f19181;
	z-index          : 5;
	transform        : scaleX(0);
	transition       : all 0.3s ease-in-out;
}

.FABMenu input:checked ~ .action_items_bar {
	transform : scaleX(1);
}

.action_items span {
	position     : absolute;
	top          : 25%;
	width        : 20px;
	padding-left : 35px;
	opacity      : 0;
	transition   : all 0.2s ease-in-out;
	cursor       : pointer;
}

.first_item {
	left : 0%;
}

.second_item {
	left : 15%;
}

.third_item {
	left : 55%;
}

.fourth_item {
	left : 70%;
}

.FABMenu input:checked ~ .action_items_bar .action_items .first_item {
	opacity          : 1;
	transition-delay : 0.45s;
}

.FABMenu input:checked ~ .action_items_bar .action_items .second_item {
	opacity          : 1;
	transition-delay : 0.4s;
}

.FABMenu input:checked ~ .action_items_bar .action_items .third_item {
	opacity          : 1;
	transition-delay : 0.4s;
}

.FABMenu input:checked ~ .action_items_bar .action_items .fourth_item {
	opacity          : 1;
	transition-delay : 0.45s;
}


</style>