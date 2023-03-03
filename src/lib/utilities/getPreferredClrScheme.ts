export default function getPreferredClrScheme() {
	return matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}
