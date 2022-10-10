// TypeScript models
import type { BaseStructure } from "../models/baseStructure.js"
// Module
import LinkedList from "../modules/linkedList.js"
import Node from "../modules/node.js"
import Iterator from "../modules/iterator.js"

describe("examination class LinkedList:", () => {
	const node1 = new Node(400)
	const node2 = new Node(1000)
	let list: BaseStructure.ILinkedList
	beforeEach(() => {
		list = new LinkedList()
		list.add(200)
		list.add(42)
	})
	const displayLinkedListMock = jest.spyOn(Node.prototype, "displayNode")
	const nextIteratorMock = jest.spyOn(Iterator.prototype, "next")

	test("testing defined methods", () => {
		expect(list.add).toBeDefined()
		expect(list.deleteFirst).not.toBe(undefined)
		expect(list.deleteLast).toBeDefined()
		expect(list.displayLinkedList).toBeDefined()
		expect(list.findNodeByValue).toBeDefined()
		expect(list.firstAdd).toBeDefined()
		expect(list.isEmpty).toBeDefined()
	})
	test("testing isEmpty method return value", () => {
		expect(new LinkedList().isEmpty()).toBe(true)
		expect(list.isEmpty()).toBe(false)
	})
	test("testing firstAdd method", () => {
		expect(list.firstAdd(1).getValueNode()).toBe(1)
	})
	test("testing return value add method", () => {
		expect(list.add(71).getValueNode()).toBe(71)
	})
	test("testing return value for deleteFirst method in Empty LinkedList", () => {
		expect(new LinkedList().deleteFirst()).toBeNull()
	})
	test("testing return value deleteFirst", () => {
		expect(list.deleteFirst()!.getValueNode()).toBe(200)
	})
	test("testing return value for deleteLast method in Empty LinkedList", () => {
		expect(new LinkedList().deleteLast()).toBeNull()
	})
	test("testing return value deleteLast method", () => {
		list.add(node1)
		list.add(node2)
		expect(list.deleteLast()!.getValueNode()).toEqual(node2)
		expect(list.deleteLast()!.getValueNode()).toEqual(node1)
	})
	test("testing method findNodeByValue in empty LinkedList", () => {
		expect(new LinkedList().findNodeByValue(900)).toBe(null)
	})
	test("testing method findNodeByValue", () => {
		list.firstAdd(node2)
		list.add(node1)
		expect(list.findNodeByValue(42)?.getValueNode()).toBe(42)
	})
	test("testing method findNodeByValue return null", () => {
		expect(list.findNodeByValue(1997)).toBe(null)
	})
	test("testing method displayLinkedList", () => {
		list.add(71)
		list.displayLinkedList()
		expect(displayLinkedListMock).toHaveBeenCalledTimes(3)
	})
	test("testing method [Symbol.iterator]", () => {
		for (const nodeLinkedList of list) {}
		expect(nextIteratorMock).toHaveBeenCalledTimes(3)
		const newLinkedList: BaseStructure.ILinkedList = new LinkedList()
		const result: BaseStructure.IIterator = new Iterator(newLinkedList)
		expect(newLinkedList[Symbol.iterator]()).toEqual(result)
	})
})
