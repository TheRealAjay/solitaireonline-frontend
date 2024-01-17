<script setup>

import Board from "@/views/Board.vue";

import {ref} from 'vue'

const renderKey = ref(0)

const updateComponent = () => {
	renderKey.value += 1
}
</script>

<template>
	<Board :key="renderKey" :self-reload="updateComponent" />
</template>