// В этом файле содержатся базовые интерфейсы модулей

export namespace BaseStructure{
	export interface INode{
		next: null | INode;
		prev: null | INode;
		value: any;
		displayNode: () => string;
		getValueNode: () => any;
	}
	export interface ILinkedList{
		first: null | INode;
		last: null | INode;
		isEmpty: () => boolean;
		displayLinkedList: () => void;
		firstAdd: (valueForNewNode: any) => INode;
		add: (valueForNewNode: any) => INode;
		deleteFirst: () => null | INode;
		deleteLast: () => null | INode;
		findNodeByValue: (searchValue: any) => null | INode;
	}
}
