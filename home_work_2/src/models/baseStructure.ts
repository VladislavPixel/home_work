// Базовые структуры для реализации очереди на основе связанного списка

export namespace BaseStructure{
	export interface INode<Y = any>{
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
		head: any;
		push<Z>(newValue: Z): IQueue;
		pop(): any;
	}
}