// TypeScript interface
import type { IStack } from "../interface/i_stack.js"
// Module
import Stack from "../module/stack.js"

describe("Examination class Stack", () => {
	let stack: IStack
	beforeEach(() => {
		stack = new Stack()
	})
	test("testing create instance stack", () => {
		expect(stack.head).toBe(null)
		expect(stack.isEmpty).toBeDefined()
		expect(stack.isFull).toBeDefined()
		expect(stack.pop).toBeDefined()
		expect(stack.push).toBeDefined()
	})
	test("testing method isEmpty", () => {
		expect(stack.isEmpty()).toBe(true)
		stack.push(200)
		expect(stack.isEmpty()).toBe(false)
		stack.pop()
		expect(stack.isEmpty()).toBe(true)
	})
	test("testing method isFull", () => {
		expect(stack.isFull()).toBe(false)
		for (let m = 0; m < 10; m++) {
			stack.push(m ** 2)
		}
		expect(stack.isFull()).toBe(true)
		stack.pop()
		expect(stack.isFull()).toBe(false)
	})
	test("testing property head", () => {
		expect(stack.head).toBe(null)
		stack.push(777)
		expect(stack.head).toBe(777)
		stack.pop()
		expect(stack.head).toBe(null)
	})
	test("testing method push", () => {
		expect(stack.isEmpty()).toBe(true)
		expect(stack.push(123)).toBe(true)
		expect(stack.push(555)).toBe(true)
		for (let m = 0; m < 8; m++) {
			stack.push(m ** 3)
		}
		expect(stack.isFull()).toBe(true)
		expect(stack.push(7777)).toBe(false)
	})
	test("testing method pop", () => {
		expect(stack.isEmpty()).toBe(true)
		expect(() => stack.pop()).toThrow("Stack is Empty!!!")
		stack.push(25213)
		expect(stack.pop()).toBe(25213)
		expect(stack.head).toBe(null)
	})
})
