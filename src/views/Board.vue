<script setup>
import background_image from "../assets/background.png";
import PlayingCard from "@/components/Card/PlayingCard.vue";
import '../assets/circular_nav.css'
</script>

<template>
	<div class="navigation">
		<div class="pie pie1" onclick="document.body.classList.remove('active')">
			<div class="pie-color pie-color1" @click="restartGame()">
				<svg class="reset" height="90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
					<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
					   stroke-width="0.9120000000000001"></g>
					<g id="SVGRepo_iconCarrier">
						<path
							d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
							stroke="#FFFFFF" stroke-width="1.5"></path>
						<path
							d="M15.9775 8.71452L15.5355 8.2621C13.5829 6.26318 10.4171 6.26318 8.46447 8.2621C6.51184 10.261 6.51184 13.5019 8.46447 15.5008C10.4171 17.4997 13.5829 17.4997 15.5355 15.5008C16.671 14.3384 17.1462 12.7559 16.9611 11.242M15.9775 8.71452H13.3258M15.9775 8.71452V6"
							stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
					</g>
				</svg>
			</div>
		</div>
		<div class="pie pie2" @click="goBack()">
			<div class="pie-color pie-color2">
				<svg class="back" viewBox="0 0 24 24" height="90" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
					<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
					<g id="SVGRepo_iconCarrier">
						<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
							  stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
						<path
							d="M9.00002 15.3802H13.92C15.62 15.3802 17 14.0002 17 12.3002C17 10.6002 15.62 9.22021 13.92 9.22021H7.15002"
							stroke="#FFFFFF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
							stroke-linejoin="round"></path>
						<path d="M8.57 10.7701L7 9.19012L8.57 7.62012" stroke="#FFFFFF" stroke-width="1.5"
							  stroke-linecap="round" stroke-linejoin="round"></path>
					</g>
				</svg>
			</div>
		</div>
		<div class="pie pie3" @click="setWindow(3)">
			<div class="pie-color pie-color3">
				<svg fill="#FFFFFF" class="stats" height="100" version="1.1" id="Capa_1"
					 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
					 viewBox="0 0 250.26 250.26" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
					<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
					<g id="SVGRepo_iconCarrier">
						<path
							d="M242.76,218.537h-39.518v-99.071c0-4.143-3.357-7.5-7.5-7.5h-39.557v-39.39c0-4.143-3.357-7.5-7.5-7.5h-47.061 c-4.143,0-7.5,3.357-7.5,7.5v54.07H54.557c-4.143,0-7.5,3.357-7.5,7.5v84.391H15V24.216c0-4.143-3.358-7.5-7.5-7.5 c-4.143,0-7.5,3.357-7.5,7.5v201.82c0,4.143,3.357,7.5,7.5,7.5h46.921c0.046,0.001,0.09,0.007,0.136,0.007h47.061 c0.002,0,0.002,0,0.004,0c0.002,0,0.002,0,0.004,0h47.061h47.057c0.046,0,0.09-0.006,0.136-0.007h46.882c4.143,0,7.5-3.357,7.5-7.5 C250.26,221.894,246.902,218.537,242.76,218.537z M188.242,126.965v91.571h-32.057v-91.571H188.242z M141.186,80.076v39.39v99.071 h-32.061V80.076H141.186z M62.057,141.646h32.061v76.891H62.057V141.646z">
						</path>
					</g>
				</svg>
			</div>
		</div>
		<div class="menu" onclick="document.body.classList.toggle('active')">
			<svg class="hamburger" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
				<g fill="none" stroke="#000" stroke-width="7.999" stroke-linecap="round">
					<path d="M 55,26.000284 L 24.056276,25.999716" />
					<path d="M 24.056276,49.999716 L 75.943724,50.000284" />
					<path d="M 45,73.999716 L 75.943724,74.000284" />
					<path d="M 75.943724,26.000284 L 45,25.999716" />
					<path d="M 24.056276,73.999716 L 55,74.000284" />
				</g>
			</svg>
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
					<div style="display: flex; justify-content: center; align-items: center; width: 100%; height: 100%">
						<svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
							<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"
							   stroke="#CCCCCC"
							   stroke-width="0.9120000000000001"></g>
							<g id="SVGRepo_iconCarrier">
								<path
									d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
									stroke="#FFFFFF" stroke-width="0.5"></path>
								<path
									d="M15.9775 8.71452L15.5355 8.2621C13.5829 6.26318 10.4171 6.26318 8.46447 8.2621C6.51184 10.261 6.51184 13.5019 8.46447 15.5008C10.4171 17.4997 13.5829 17.4997 15.5355 15.5008C16.671 14.3384 17.1462 12.7559 16.9611 11.242M15.9775 8.71452H13.3258M15.9775 8.71452V6"
									stroke="#FFFFFF" stroke-width="0.5" stroke-linecap="round"
									stroke-linejoin="round"></path>
							</g>
						</svg>
					</div>
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
			this.selectedCards.forEach((cardItem, indexItem) => {
				const cardElement = document.getElementById('card-' + cardItem.id);
				cardElement.style.left = evt.clientX - (cardElement.children[0].getBoundingClientRect().width / 2) + 'px';
				cardElement.style.top = evt.clientY - (cardElement.children[0].getBoundingClientRect().height / 2) + indexItem * 45 + 'px';
				cardElement.style.position = 'fixed';
				cardElement.style.width = cardElement.children[0].getBoundingClientRect().width + 'px';
				cardElement.style.height = cardElement.children[0].getBoundingClientRect().height + 'px';
				cardElement.style.zIndex = 999;
			});
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
			// console.log('moveCard w', elem.getBoundingClientRect().width)
			// console.log('moveCard h', elem.getBoundingClientRect().height)
			elem.style.top = clientY - (elem.getBoundingClientRect().height / 2) + index * 45 + 'px';
			elem.style.left = clientX - (elem.getBoundingClientRect().width / 2) + 'px';
			elem.style.position = 'fixed';
			elem.style.zIndex = 999;
		},
		resetCardPos(card, index) {
			const elem = document.getElementById('card-' + card.id);
			elem.style.position = null;
			elem.style.left = null;
			if (elem.dataset.cardPos.startsWith("c")) {
				elem.style.top = index * 45 + 'px';
			} else {
				elem.style.top = null;
			}
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
</style>