// Базовые структуры для реализации очереди на основе связанного списка

export namespace BaseStructure{
	export interface INode<Y = unknown>{
		value: Y;
		next: null | INode<Y>;
		getNodeValue(): Y;
	}
	export interface ILinkedList{
		first: null | INode;
		tail: null | INode;
		isEmpty(): boolean;
		addLast<X>(newValue: X): ILinkedList;
		deleteFirst(): null | INode;
	}
	export interface IQueue{
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		head: any;
		push<Z>(newValue: Z): IQueue;
		pop(): unknown;
	}
}