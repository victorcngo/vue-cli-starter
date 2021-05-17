<template>
	<div class="HelloWorld">
		<h1>{{ msg }}</h1>
		<p>You now are ready to code.</p>
	</div>
</template>

<script>
export default {
	name: "HelloWorld",
	props: {
		msg: String,
	},
};
</script>

<style lang="scss">
@import "../sass/components/HelloWorld.scss";
</style>
