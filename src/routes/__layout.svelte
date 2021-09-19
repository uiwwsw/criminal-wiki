<script>
	import Head from '$src/components/head.svelte';
	import Nav from '$src/components/nav.svelte';
	import Session from '$src/utils/session';
	import { onMount } from 'svelte';
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
		theme = Session.getItem('theme');
	});
</script>

<Head />
<main class={theme}>
	<Nav {routes} />
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
</style>
