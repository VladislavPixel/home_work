export interface IDecQueue{
	push<T>(newValue: T): boolean;
	unshift<A>(newValue: A): boolean;
	pop(): unknown;
	shift(): unknown;
	isFull(): boolean;
	isEmpty(): boolean;
}