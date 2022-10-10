// В этом файле содержатся базовые интерфейсы модулей

export namespace BaseStructure{
	export interface IResultIterator{
		value: undefined | INode;
		done: boolean;
	}
	export interface INode<R = unknown>{
		next: null | INode<R>;
		prev: null | INode<R>;
		value: R;
		displayNode(): string;
		getValueNode(): R;
	}
	export type PropertiesIteratorType = () => IIterator
	export interface IIterator{
		currentValue: null | INode;
		next(): IResultIterator;
		[Symbol.iterator]: PropertiesIteratorType;
	}
	export interface ILinkedList{
		first: null | INode;
		last: null | INode;
		isEmpty(): boolean;
		displayLinkedList(): void;
		firstAdd<G>(valueForNewNode: G): INode;
		add<X>(valueForNewNode: X): INode;
		deleteFirst(): null | INode;
		deleteLast(): null | INode;
		findNodeByValue<A>(searchValue: A): null | INode;
		[Symbol.iterator]: PropertiesIteratorType;
	}
}
