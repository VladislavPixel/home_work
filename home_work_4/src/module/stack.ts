// TypeScript interface
import type { IStack } from "../interface/i_stack.js"

class Stack implements IStack{
	#base: unknown[]
	#top: number
	head: unknown
	constructor() {
		this.#base = new Array(10)
		this.#top = -1
		this.head = null
	}
	isEmpty() {
		return this.#top === -1
	}
	isFull() {
		return this.#top === this.#base.length - 1
	}
	push<X>(newValue: X) {
		if (this.isFull()) {
			console.log("Stack is Full!!!")
			return false
		}
		++this.#top
		this.#base[this.#top] = newValue
		this.head = newValue
		return true
	}
	pop() {
		if (this.isEmpty()) throw new Error("Stack is Empty!!!")
		const deleteElement = this.#base[this.#top]
		--this.#top
		this.head = (this.#top === -1 ? null : this.#base[this.#top])
		return deleteElement
	}
}

export default Stack
