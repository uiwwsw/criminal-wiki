<script>
	import Head from '$src/components/head.svelte';
	import { fade } from 'svelte/transition';
	import Nav from '$src/components/nav.svelte';
	import Tooltip from '$src/components/tooltip.svelte';
	import Session from '$src/utils/session';
	import { statusStore } from '$src/stores/';
	import { tooltipStore } from '$src/stores/';
	import { onMount } from 'svelte';
	import { STATUS } from '$src/stores/status';
	const routes = [
		{
			href: '/',
			name: '홈'
		},
		{
			href: '/criminal/dawdwa',
			name: '범죄자'
		}
	];
	let theme;
	onMount(() => {
		statusStore.change(STATUS.DONE);
		theme = Session.getItem('theme');
	});
	function handleClick(event) {
		tooltipStore.show({
			msg: 'dajwlkdjaklwd'
		});
	}
</script>

<Head />
<main class={theme}>
	{#if $statusStore === STATUS.LOADING}
		<div class="loading" transition:fade />
	{/if}
	<Nav {routes} />
	<Tooltip />
	<div on:click={handleClick}>툴팁열자</div>
	<slot />
</main>

<style lang="scss">
	// 전역 css 변수는 여기
	main {
		--nav-width: 30rem;

		height: 100%;
		padding-left: var(--nav-width);
	}
	.blue {
		--nav-width: 20rem;
	}
	.loading {
		z-index: 1000;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: #fff;
	}
</style>
