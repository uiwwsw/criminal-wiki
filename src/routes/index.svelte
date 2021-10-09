<script>
	import { onMount } from 'svelte';
	import { themeStore } from '$src/stores/';
	import Session from '$src/utils/session';

	// const env = import.meta.env;
	// console.log(Session, env, 'djakldja');
	onMount(async () => {
		const { firestore } = await import('$src/plugins/firebase');
		console.log(firestore, 'dvdjkaldjlaw');
		// themeStore.add('blue');

		Session.setItem({
			key: 'theme',
			value: 'blue'
		});
		const a = Session.getItem('fine');
		console.log(a);
		const b = Session.getItem('fine2');
		console.log(b);
		// console.log(2);
		// Session.setItem({
		// 	key: 'fine2',
		// 	value: {
		// 		a: 2,
		// 		b: true
		// 	}
		// });
		// Session.setItem({
		// 	key: 'fine',
		// 	value: 'ddddddd',
		// 	expires: {
		// 		value: 30,
		// 		type: 'seconds'
		// 	}
		// });
		// Session.setItem({
		// 	key: 'fine2',
		// 	value: {
		// 		a: 2,
		// 		b: true
		// 	}
		// });
		// (() => {

		// })();

		return false;
	});
</script>

<h1>{$themeStore}</h1>
<h2>dadawd</h2>
<input type="text" />
<textarea name="" id="" cols="30" rows="10" />
<form action="" />
<label for="" />
<a href="/criminal/dd">ddd</a>

<style lang="scss">
	h1 {
		color: red;
		width: var(--nav-width);
	}
</style>
