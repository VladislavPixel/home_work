// TypeScript models
import type { BaseStructure } from "../models/baseStructure.js"

class Node<T> implements BaseStructure.INode<T>{
	value: T
	next: null | BaseStructure.INode
	constructor(newValue: T) {
		this.value = newValue
		this.next = null
	}
	getNodeValue(): T {
		return this.value
	}
}

export default Node
