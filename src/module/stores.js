import { writable } from "svelte/store";

export const indexStore = writable(0);
export const musicStore = writable([]);
export const countStore = writable(0);
export const answerStore = writable("");
export const isStartStore = writable(false);
export const isEndStore = writable(false);
export const playerStore = writable(null);
export const divIdStore = writable("");
