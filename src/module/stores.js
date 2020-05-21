import { writable } from "svelte/store";

export const store = writable({ index: 0, music: [], answer: "" });
