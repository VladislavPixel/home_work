// В этом файле содержатся базовые интерфейсы модулей

export namespace BaseStructure{
	export interface INode<T = unknown>{
		next: null | INode;
		prev: null | INode;
		value: T;
		displayNode: () => string;
		getValueNode: () => T;
	}
	export interface ILinkedList{
		first: null | INode;
		last: null | INode;
		isEmpty: () => boolean;
		displayLinkedList: () => void;
		firstAdd<V>(valueForNewNode: V): INode;
		add<Z>(valueForNewNode: Z): INode;
		deleteFirst: () => null | INode;
		deleteLast: () => null | INode;
		findNodeByValue<M>(searchValue: M): null | INode;
	}
}
