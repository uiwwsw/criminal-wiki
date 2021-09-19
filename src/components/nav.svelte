<script>
	export let routes = [];
</script>

<nav>
	{#each routes as route}
		<a href={route.href}>{route.name}</a>
	{/each}
</nav>

<style lang="scss">
	nav {
		position: fixed;
		left: 0;
		top: 0;
		width: var(--nav-width);
		height: 100%;
		border-right: 0.1rem solid #000;
	}
</style>
