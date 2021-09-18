<script>
	import Head from '$src/components/head.svelte';
</script>

<Head />
<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
	<a href="/settings">Settings</a>
</nav>
<main>
	<slot />
</main>

<style lang="scss">
	// 전역 css 변수는 여기
	:global(html) {
		--nav-width: 300px;
	}
	nav {
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		width: var(--nav-width);
	}
	main {
		padding-left: var(--nav-width);
	}
</style>
