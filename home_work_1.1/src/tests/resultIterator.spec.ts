// TypeScript model
import type { BaseStructure } from "../models/baseStructure.js"
// Module
import ResultIterator from "../modules/resultIterator.js"
import Node from "../modules/node.js"

describe("examination class ResultIterator:", () => {
	const res1: BaseStructure.IResultIterator = new ResultIterator(undefined, true)
	const res2: BaseStructure.IResultIterator = new ResultIterator(new Node(167), false)
	test("testing create instance", () => {
		expect(res1).toEqual({ value: undefined, done: true })
		expect(res2).toEqual({ value: { value: 167, prev: null, next: null }, done: false })
	})
})