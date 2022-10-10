// TypeScript models
import type { BaseStructure } from "../models/baseStructure.js"
// Module
import LinkedList from "./linkedList.js"

class Queue implements BaseStructure.IQueue{
	head: unknown
	#base: BaseStructure.ILinkedList
	#auxiliary: number
	constructor() {
		this.#base = new LinkedList()
		this.head = null
		this.#auxiliary = -1
	}
	push<R>(newValue: R) {
		if (this.#auxiliary === -1) {
			this.head = newValue
			this.#auxiliary = 0
		}
		this.#base.addLast(newValue)
		return this
	}
	pop() {
		const deleteEl: null | BaseStructure.INode = this.#base.deleteFirst()
		if (!deleteEl) throw new Error("Exception queue isEmpty")
		if (deleteEl.next) {
			this.head = deleteEl.next.getNodeValue()
		} else {
			this.head = null
			this.#auxiliary = -1
		}
		return deleteEl.getNodeValue()
	}
}

export default Queue
