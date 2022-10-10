// TypeScript models
import type { BaseStructure } from "../models/baseStructure.js"
// Module
import Queue from "../module/queue.js"
import LinkedList from "../module/linkedList.js"

describe("examination class Queue:", () => {
	let queue: BaseStructure.IQueue
	beforeEach(() => {
		queue = new Queue()
	})
	const addLastLinkedListMock = jest.spyOn(LinkedList.prototype, "addLast")
	const deleteFirstLinkedListMock = jest.spyOn(LinkedList.prototype, "deleteFirst")

	test("testing create instance Queue", () => {
		expect(queue.head).toBe(null)
		expect(queue.pop).toBeDefined()
		expect(queue.push).toBeDefined()
	})
	test("testing method push", () => {
		queue.push(155)
		expect(addLastLinkedListMock).toHaveBeenCalledTimes(1)
		expect(queue.head).toBe(155)
		queue.push(255)
		expect(addLastLinkedListMock).toHaveBeenCalledTimes(2)
	})
	test("testing method pop", () => {
		queue.push(71)
		queue.push(81)
		expect(queue.pop()).toBe(71)
		expect(queue.pop()).toBe(81)
		expect(deleteFirstLinkedListMock).toHaveBeenCalledTimes(2)
		expect(() => queue.pop()).toThrow("Exception queue isEmpty")
	})
})