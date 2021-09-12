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
			status: 200,
		};
	}
</script>

<script>
    import criminalApi from '$src/apis/criminal'
    import Head from '$src/components/head.svelte'
    import {criminal} from '$src/stores'
    export let article
    $: b = article[0].b
</script>

<Head />
<h1>{$criminal.a}</h1>
<h2 on:click={criminal.in}>{b}</h2>

<style lang="scss">
	h1 {
		color: red;
	}
</style>
