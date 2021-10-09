import { writable } from 'svelte/store';
export enum POSITION {
	BOTTOM_CENTER
}
interface TooltipPayload {
	msg?: string;
	duration?: number;
	position?: POSITION;
}
export const DEFAULT_TOOLTIP = {
	msg: '',
	duration: 3000,
	position: POSITION.BOTTOM_CENTER
};
function createStore() {
	const { subscribe, update } = writable(DEFAULT_TOOLTIP);

	return {
		subscribe,
		show: ({ msg, duration, position }: TooltipPayload) => {
			duration = duration || DEFAULT_TOOLTIP.duration;
			position = position || DEFAULT_TOOLTIP.position;
			update(() => ({ msg, duration, position }));
			setTimeout(() => {
				update(() => DEFAULT_TOOLTIP);
			}, duration);
		},
		hide: () => update(() => DEFAULT_TOOLTIP)
	};
}

export default createStore();
