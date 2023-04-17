// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	namespace svelteHTML {
		interface HTMLAttributes<T> {
			'on:enteringViewport'?: (event: MouseEvent) => void;
			'on:exitingViewport'?: (event: MouseEvent) => void;
		}
	}
}
export {};
