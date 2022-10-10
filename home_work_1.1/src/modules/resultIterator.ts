// TypeScript model
import type { BaseStructure } from "../models/baseStructure.js"

class ResultIterator<A extends undefined | BaseStructure.INode, B extends boolean> implements BaseStructure.IResultIterator{
	value: A
	done: B
	constructor(value: A, statusDone: B) {
		this.value = value
		this.done = statusDone
	}
}

export default ResultIterator
