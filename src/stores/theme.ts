import { writable } from 'svelte/store';
function createStore() {
	const { subscribe, update } = writable('red');

	return {
		subscribe,
		add: (theme) => update(() => theme)
	};
}

export default createStore();
