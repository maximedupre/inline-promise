declare module 'inline-promise' {
	export default function inlinePromise<T, E>(): [Promise<T>, (value: T) => void, (error: E) => any];
}