// TypeScrip models
import type { BaseStructure } from "../models/baseStructure.js"
// Module
import LinkedList from "../module/linkedList.js"

describe("examination class LinkedList:", () => {
	let list: BaseStructure.ILinkedList
	const firstElement = {
		value: 10,
		next: { value: 11, next: null }
	}
	beforeEach(() => {
		list = new LinkedList()
	})
	test("testing create linkedList", () => {
		expect(list.first).toBe(null)
		expect(list.tail).toBeNull()
		expect(list.isEmpty).toBeDefined()
		expect(list.addLast).toBeDefined()
		expect(list.deleteFirst).toBeDefined()
	})
	test("testing addLast method", () => {
		list.addLast(10)
		list.addLast(11)
		expect(list.first).toEqual(firstElement)
		expect(list.first!.getNodeValue()).toBe(10)
		expect(list.tail).toEqual({ value: 11, next: null })
	})
	test("testing deleteFirst method", () => {
		list.addLast(10)
		list.addLast(11)
		expect(list.deleteFirst()).toEqual(firstElement)
		expect(list.deleteFirst()).toEqual({ value: 11, next: null })
		expect(list.deleteFirst()).toBe(null)
		expect(list.first).toBe(null)
		expect(list.tail).toBeNull()
	})
})