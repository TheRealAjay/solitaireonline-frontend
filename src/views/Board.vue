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
		<div class="logout" @click="logout()">
			<svg style="top: 57px;position: absolute;left: 17px;" width="25" height="25" viewBox="0 0 24 24"
				 fill="none" xmlns="http://www.w3.org/2000/svg">
				<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
				<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
				<g id="SVGRepo_iconCarrier">
					<path
						d="M14.9453 1.25C13.5778 1.24998 12.4754 1.24996 11.6085 1.36652C10.7084 1.48754 9.95048 1.74643 9.34857 2.34835C8.82363 2.87328 8.55839 3.51836 8.41916 4.27635C8.28387 5.01291 8.25799 5.9143 8.25196 6.99583C8.24966 7.41003 8.58357 7.74768 8.99778 7.74999C9.41199 7.7523 9.74964 7.41838 9.75194 7.00418C9.75803 5.91068 9.78643 5.1356 9.89448 4.54735C9.99859 3.98054 10.1658 3.65246 10.4092 3.40901C10.686 3.13225 11.0746 2.9518 11.8083 2.85315C12.5637 2.75159 13.5648 2.75 15.0002 2.75H16.0002C17.4356 2.75 18.4367 2.75159 19.1921 2.85315C19.9259 2.9518 20.3144 3.13225 20.5912 3.40901C20.868 3.68577 21.0484 4.07435 21.1471 4.80812C21.2486 5.56347 21.2502 6.56459 21.2502 8V16C21.2502 17.4354 21.2486 18.4365 21.1471 19.1919C21.0484 19.9257 20.868 20.3142 20.5912 20.591C20.3144 20.8678 19.9259 21.0482 19.1921 21.1469C18.4367 21.2484 17.4356 21.25 16.0002 21.25H15.0002C13.5648 21.25 12.5637 21.2484 11.8083 21.1469C11.0746 21.0482 10.686 20.8678 10.4092 20.591C10.1658 20.3475 9.99859 20.0195 9.89448 19.4527C9.78643 18.8644 9.75803 18.0893 9.75194 16.9958C9.74964 16.5816 9.41199 16.2477 8.99778 16.25C8.58357 16.2523 8.24966 16.59 8.25196 17.0042C8.25799 18.0857 8.28387 18.9871 8.41916 19.7236C8.55839 20.4816 8.82363 21.1267 9.34857 21.6517C9.95048 22.2536 10.7084 22.5125 11.6085 22.6335C12.4754 22.75 13.5778 22.75 14.9453 22.75H16.0551C17.4227 22.75 18.525 22.75 19.392 22.6335C20.2921 22.5125 21.0499 22.2536 21.6519 21.6517C22.2538 21.0497 22.5127 20.2919 22.6337 19.3918C22.7503 18.5248 22.7502 17.4225 22.7502 16.0549V7.94513C22.7502 6.57754 22.7503 5.47522 22.6337 4.60825C22.5127 3.70814 22.2538 2.95027 21.6519 2.34835C21.0499 1.74643 20.2921 1.48754 19.392 1.36652C18.525 1.24996 17.4227 1.24998 16.0551 1.25H14.9453Z"
						fill="#000000"></path>
					<path
						d="M15 11.25C15.4142 11.25 15.75 11.5858 15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H4.02744L5.98809 14.4306C6.30259 14.7001 6.33901 15.1736 6.06944 15.4881C5.79988 15.8026 5.3264 15.839 5.01191 15.5694L1.51191 12.5694C1.34567 12.427 1.25 12.2189 1.25 12C1.25 11.7811 1.34567 11.573 1.51191 11.4306L5.01191 8.43056C5.3264 8.16099 5.79988 8.19741 6.06944 8.51191C6.33901 8.8264 6.30259 9.29988 5.98809 9.56944L4.02744 11.25H15Z"
						fill="#000000"></path>
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
	emits: ["changePage"],
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
					elem.style.height = (height + ((elem.childElementCount - 1) * 45)) + 'px';
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
		logout() {
			const pauseSessBoyd = {
				solitaireSessionId: localStorage.SessionID
			}
			const stopSessReq = {
				method: 'POST',
				headers: {
					"Content-Type": "application/json",
					"Accept": "*/*",
					"Authorization": `Bearer ${localStorage.BearerToken}`,
				},
				body: JSON.stringify(pauseSessBoyd)
			}
			fetch(config.api.url + '/Session/pause', stopSessReq)
				.then(async response => {
					localStorage.clear();
					window.location.reload();
				});
		},
		setWindow(viewIndex) {
			this.$emit('changePage', viewIndex)
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
						this.selectedCards.forEach((card, index) => {
							card.position = this.targetStack + "r" + (targetStackNode.childElementCount + (index + 1));
						});
						this.cardObjects = this.cardObjects.map((card) => {
							const updatedCard = this.selectedCards.find((c) => c.id === card.id);
							return updatedCard ? updatedCard : card;
						});
						if ((parseInt(firstCardPos[1]) - 1) > 0) {
							let flipReqBody = {
								position: beforeCardPos,
								manualFlip: false,
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
									let flipCard = this.cardObjects.find(c => c.position === beforeCardPos);
									this.cardObjects = this.cardObjects.map((card) => {
										if (card.id === flipCard.id) {
											card.flipped = true;
										}
										return card;
									});
								}
							});
						}
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
			elem.style.top = clientY - (elem.children[0].getBoundingClientRect().height / 2) + index * 45 + 'px';
			elem.style.left = clientX - (elem.children[0].getBoundingClientRect().width / 2) + 'px';
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