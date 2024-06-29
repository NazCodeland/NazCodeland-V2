import type { ComponentType, SvelteComponent } from 'svelte';

export interface File {
	metadata: BlogPost;
	default: ComponentType<SvelteComponent>;
}

export interface BlogPost {
	title: string;
	created: string;
	updated: string;
	description: string;
	tags: Array<string>;
	path?: string;
}

export interface FuseResult {
	item: string;
	refIndex: number;
	score?: number;
}
