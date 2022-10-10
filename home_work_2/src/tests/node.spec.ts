// TypeScript models
import type { BaseStructure } from "../models/baseStructure.js"
// Module
import Node from "../module/node.js"

describe("examination class Node:", () => {
	let testNode: BaseStructure.INode
	let result: { name: string, age: number }
	beforeEach(() => {
		result = { name: "Vlad", age: 24 }
		testNode = new Node(result)
	})
	test("defined method getNodeValue", () => {
		expect(testNode.getNodeValue()).toBeDefined()
	})
	test("testing create Node instance", () => {
		expect(testNode).toEqual({ next: null, value: result })
	})
	test("testing return value method getNodeValue", () => {
		expect(testNode.getNodeValue()).toEqual(result)
	})
})