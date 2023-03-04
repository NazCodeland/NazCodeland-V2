import { browser } from '$app/environment';
import { writable, type Writable } from 'svelte/store';

export let colorSchemeStore = writable('');

export function toggleColorScheme() {
    colorSchemeStore.update((theme: string) => {
        return theme === 'light' ? 'dark' : 'light';
    });
}

function initializeColorScheme() {
    let initialTheme = 'light';
    if (browser) {
        const userTheme = window.localStorage.getItem('NazCodeland.colorScheme');
        if (userTheme) {
            initialTheme = userTheme;
        } else {
            initialTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
        }
    }
    colorSchemeStore.set(initialTheme);
}

colorSchemeStore.subscribe((colorScheme) => {
    if (browser) window.localStorage.setItem('NazCodeland.colorScheme', colorScheme);
});

initializeColorScheme();