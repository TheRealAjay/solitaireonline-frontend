<script setup>

import Board from "@/views/Board.vue";

import {ref} from 'vue'

const renderKey = ref(0)

const updateComponent = () => {
	renderKey.value += 1
}
</script>

<template>
	<Board @change-view="(newView) => this.setWindow(newView)" :key="renderKey" :self-reload="updateComponent" />
</template>

<script>
import config from "../../navigator.json";

export default {
	emits: ["changeView"],
	methods: {
		setWindow(viewIndex) {
			this.$emit('changeView', viewIndex)
		},
	}
}
</script>