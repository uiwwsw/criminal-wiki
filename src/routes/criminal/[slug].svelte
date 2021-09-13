<script context="module">
	export async function load({ page, fetch, session, context }) {
		const res = await criminalApi();

		if (res) {
			return {
				props: {
					article: await res
				}
			};
		}

		return {
			status: 200
		};
	}
</script>

<script>
	import criminalApi from '$src/apis/criminal';
	import Head from '$src/components/head.svelte';
	import { criminalStore } from '$src/stores/';
	// export let article;
	// $: b = article[0].b;
</script>

<Head />
<h1>{$criminalStore[0]?.id}</h1>
<h2 on:click={criminalStore.add.bind(this, [{ id: '1', country: 'ko', address: 'ee', type: [1] }])}>
	ddd
</h2>

<style lang="scss">
	h1 {
		color: red;
	}
</style>
