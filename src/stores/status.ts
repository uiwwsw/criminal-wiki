import { writable } from 'svelte/store';
export enum STATUS {
	LOADING,
	DONE
}

function createStore() {
	const { subscribe, update } = writable(STATUS.LOADING);

	return {
		subscribe,
		change: (status: STATUS) => update(() => status)
	};
}

export default createStore();
