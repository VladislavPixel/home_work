// TypeScript model
import type { BaseStructure } from "../models/baseStructure.js"

class Node<T> implements BaseStructure.INode<T> {
	next: null | BaseStructure.INode
	prev: null | BaseStructure.INode
	value: T
	constructor(newValue: T) {
		this.next = null
		this.prev = this.next
		this.value = newValue
	}
	displayNode() {
		const message = `Element info: value --> ${this.value};`
		console.log(message)
		return message
	}
	getValueNode() {
		return this.value
	}
}

export default Node
