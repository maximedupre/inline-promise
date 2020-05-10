declare module 'inline-promise' {
	export default function inlinePromise<T, E = any>(): [Promise<T>, (value: T) => void, (error: E) => any];
}