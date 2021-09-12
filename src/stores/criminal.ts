import { CriminalModel } from '$src/models';
import { writable } from 'svelte/store';
function createStore() {
	const { subscribe, set, update } = writable([] as CriminalModel.Criminal[]);

	return {
		subscribe,
		add: (addCriminals: CriminalModel.Criminal[]) =>
			update(criminals => [...criminals, ...addCriminals]),
		remove: (removeCriminal: CriminalModel.Criminal) =>
			update(criminals => criminals.filter(criminal => removeCriminal.id === criminal.id)),
		reset: () => set([])
	};
}

export default createStore();
