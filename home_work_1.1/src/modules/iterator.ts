// TypeScript model
import type { BaseStructure } from "../models/baseStructure.js"
// Module
import ResultIterator from "./resultIterator.js"

class Iterator implements BaseStructure.IIterator{
	currentValue: BaseStructure.INode | null
	[Symbol.iterator]: BaseStructure.PropertiesIteratorType = () => {
		return this
	}
	constructor(current: BaseStructure.ILinkedList) {
		this.currentValue = current.first
	}
	next() {
		let result: BaseStructure.IResultIterator
		if (this.currentValue) {
			result = new ResultIterator(this.currentValue, false)
			this.currentValue = this.currentValue.next
		} else {
			result = new ResultIterator(undefined, true)
		}
		return result
	}
}

export default Iterator
