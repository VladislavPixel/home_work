// TypeScript models
import type { BaseStructure } from "../models/baseStructure.js"
// Module
import Node from "./node.js"

class LinkedList implements BaseStructure.ILinkedList{
	first: null | BaseStructure.INode
	tail: null | BaseStructure.INode
	constructor() {
		this.first = null
		this.tail = this.first
	}
	isEmpty() {
		return this.first === null
	}
	addLast<V>(newValue: V) {
		const newNode = new Node(newValue)
		if (this.isEmpty()) {
			this.first = newNode
		} else if (this.tail) {
			this.tail.next = newNode
		}
		this.tail = newNode
		return this
	}
	deleteFirst() {
		if (this.isEmpty()) return this.first
		const deleteElement = this.first
		this.first = deleteElement!.next
		if (this.first === null) this.tail = this.first
		return deleteElement
	}
}

export default LinkedList
