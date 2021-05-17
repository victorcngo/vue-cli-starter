<template>
	<div class="App">
		<HelloWorld msg="Vue 2 + Webpack starter" />
	</div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
	name: "App",
	components: {
		HelloWorld,
	},
};
</script>

<style lang="scss">
@import './sass/app.scss';
</style>
