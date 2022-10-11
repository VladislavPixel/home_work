// TypeScript interface
import type { IDecQueue } from "../interface/i_dec_queue.js"

class DecQueue implements IDecQueue{
	#front: number
	#rear: number
	#base: unknown[]
	#counterElements: number
	constructor() {
		this.#base = new Array(5)
		this.#front = 0
		this.#rear = -1
		this.#counterElements = 0
	}
	isFull() {
		return this.#base.length === this.#counterElements
	}
	isEmpty() {
		return this.#counterElements === 0
	}
	push<A>(newValue: A) {
		if (this.isFull()) {
			console.log("DecQueue is Full!")
			return false
		}
		++this.#counterElements
		++this.#rear
		if (this.#rear === this.#base.length) this.#rear = 0
		this.#base[this.#rear] = newValue
		return true
	}
	unshift<V>(newValue: V) {
		if (this.isFull()) {
			console.log("DecQueue is Full!")
			return false
		}
		++this.#counterElements
		--this.#front
		if (this.#front === -1) this.#front = this.#base.length - 1
		this.#base[this.#front] = newValue
		return true
	}
	pop() {
		if (this.isEmpty()) throw new Error("DecQueue isEmpty!")
		--this.#counterElements
		if (this.#rear === -1) this.#rear = this.#base.length - 1
		const deleteValue = this.#base[this.#rear]
		--this.#rear
		return deleteValue
	}
	shift() {
		if (this.isEmpty()) throw new Error("DecQueue isEmpty!")
		--this.#counterElements
		const deleteValue = this.#base[this.#front]
		++this.#front
		if (this.#front === this.#base.length) this.#front = 0
		return deleteValue
	}
}

export default DecQueue