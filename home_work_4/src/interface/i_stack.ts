export interface IStack{
	head: unknown;
	isEmpty(): boolean;
	isFull(): boolean;
	push<A>(newValue: A): boolean;
	pop(): unknown;
}