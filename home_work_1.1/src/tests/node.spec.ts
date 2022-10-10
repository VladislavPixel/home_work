// Module
import Node from "../modules/node.js"
// TypeScript types
import type { BaseStructure } from "../models/baseStructure.js"

describe("examination class Node:", () => {
	let newNode: BaseStructure.INode
	beforeEach(() => {
		newNode = new Node(155)
	})
	test("testing defined methods node class", () => {
		expect(newNode.displayNode).toBeDefined()
		expect(newNode.getValueNode).not.toBe(undefined)
	})
	test("testing return value getValueNode method", () => {
		expect(newNode.getValueNode()).toBe(155)
	})
	test("testing return value displayNode method", () => {
		expect(newNode.displayNode()).toBe("Element info: value --> 155;")
	})
})