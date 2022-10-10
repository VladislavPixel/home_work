// TypeScript model
import type { BaseStructure } from "../models/baseStructure.js"

class Node<N> implements BaseStructure.INode<N> {
	next: null | BaseStructure.INode
	prev: null | BaseStructure.INode
	value: N
	constructor(newValue: N) {
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
