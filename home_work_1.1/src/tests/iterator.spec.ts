// TypeScript models
import type { BaseStructure } from "../models/baseStructure.js"
// Module
import Iterator from "../modules/iterator.js"
import LinkedList from "../modules/linkedList.js"

describe("examination class Iterator:", () => {
	let iterator: BaseStructure.IIterator
	beforeEach(() => {
		const list: BaseStructure.ILinkedList = new LinkedList()
		iterator = new Iterator(list)
	})
	test("testing create instance iterator", () => {
		expect(iterator.next).toBeDefined()
		expect(iterator.currentValue).toBe(null)
		expect(iterator[Symbol.iterator]).toBeDefined()
	})
	test("testing return value [Symbol.iterator]", () => {
		expect(iterator[Symbol.iterator]()).toEqual(iterator)
	})
	test("testing next method in base iterator", () => {
		expect(iterator.next()).toEqual({ value: undefined, done: true })
	})
	test("testing next method in filled iterator", () => {
		const newLinkedList: BaseStructure.ILinkedList = new LinkedList()
		newLinkedList.add(200)
		newLinkedList.add(400)
		newLinkedList.firstAdd(71)
		const newIterator: BaseStructure.IIterator = new Iterator(newLinkedList)
		expect(newIterator.next().value?.getValueNode()).toBe(71)
		expect(newIterator.next().value?.getValueNode()).toBe(200)
		expect(newIterator.next().value?.getValueNode()).toBe(400)
		expect(newIterator.next().value).toBe(undefined)
	})
})