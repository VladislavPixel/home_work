// TypeScript model
import type { BaseStructure } from "../models/baseStructure.js"
// Module
import Node from "./node.js"
import Iterator from "./iterator.js"

class LinkedList implements BaseStructure.ILinkedList{
	first: null | BaseStructure.INode
	last: null | BaseStructure.INode
	[Symbol.iterator]: BaseStructure.PropertiesIteratorType = () => {
		return new Iterator(this)
	}
	constructor() {
		this.first = null
		this.last = null
	}
	isEmpty() {
		return this.first === null
	}
	firstAdd<V>(valueForNewNode: V) {
		const newNode = new Node(valueForNewNode)
		if (this.isEmpty()) {
			this.last = newNode
		} else if (this.first) {
			this.first.prev = newNode
			newNode.next = this.first
		}
		this.first = newNode
		return this.first
	}
	add<Z>(valueForNewNode: Z) {
		const newNode = new Node(valueForNewNode)
		if (this.isEmpty()) {
			this.first = newNode
		} else if (this.last) {
			newNode.prev = this.last
			this.last.next = newNode
		}
		this.last = newNode
		return this.last
	}
	deleteFirst() {
		if (this.isEmpty()) {
			console.log("LinkedList is Empty operation deleteFirst is not supported!")
			return null
		} else {
			const deletedFirstElement = this.first
			if (this.first?.next) {
				this.first = this.first.next
				this.first.prev = null
			} else {
				this.first = null
				this.last = null
			}
			return deletedFirstElement
		}
	}
	deleteLast() {
		if (this.isEmpty()) {
			console.log("LinkedList is Empty operation deleteLast is not supported!")
			return null
		} else {
			const deletedElement = this.last
			if (this.last?.prev) {
				this.last = this.last.prev
				this.last.next = null
			} else {
				this.first = null
				this.last = null
			}
			return deletedElement
		}
	}
	findNodeByValue<T>(searchValue: T): null | BaseStructure.INode {
		if (this.isEmpty()) {
			console.log("LinkedList is Empty operation deleteLast is not supported!")
			return null
		} else {
			let currentNode = this.first
			while(currentNode) {
				if (currentNode.value === searchValue) return currentNode
				currentNode = currentNode.next
			}
			return null
		}
	}
	displayLinkedList() {
		if (this.isEmpty()) {
			console.log("Current linkedList is Empty!!! Please add elements.")
		} else {
			let currentNode = this.first
			while(currentNode) {
				currentNode.displayNode()
				console.log(currentNode.getValueNode())
				currentNode = currentNode.next
			}
		}
	}
}

export default LinkedList
