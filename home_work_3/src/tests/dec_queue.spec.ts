// TypeScript interface
import type { IDecQueue } from "../interface/i_dec_queue.js"
// Module
import DecQueue from "../module/dec_queue"

describe("Examination decqueue:", () => {
	let decqueue: IDecQueue
	beforeEach(() => {
		decqueue = new DecQueue()
	})
	test("testing method isEmpty", () => {
		expect(decqueue.isEmpty()).toBe(true)
		decqueue.push(155)
		expect(decqueue.isEmpty()).toBe(false)
	})
	test("testing method isFull", () => {
		expect(decqueue.isFull()).toBe(false)
		for (let m = 0; m < 5; m++) {
			decqueue.push(m)
		}
		expect(decqueue.isFull()).toBe(true)
		decqueue.pop()
		expect(decqueue.isFull()).toBe(false)
	})
	test("testing method push", () => {
		expect(decqueue.push(200)).toBe(true)
		for (let m = 0; m < 4; m++) {
			decqueue.push(m ** 3)
		}
		expect(decqueue.push(200)).toBe(false)
	})
	test("testing method unshift", () => {
		expect(decqueue.unshift(500)).toBe(true)
		for (let x = 0; x < 4; x++) {
			decqueue.unshift(x ** 4)
		}
		expect(decqueue.unshift(90000)).toBe(false)
	})
	test("testing method pop for empty decqueue", () => {
		expect(() => decqueue.pop()).toThrow("DecQueue isEmpty!")
	})
	test("testing method pop", () => {
		decqueue.push(700)
		decqueue.push(1000)
		expect(decqueue.pop()).toBe(1000)
		expect(decqueue.pop()).toBe(700)
		expect(() => decqueue.pop()).toThrow("DecQueue isEmpty!")
	})
	test("testing method shift for empty decqueue", () => {
		expect(() => decqueue.pop()).toThrow("DecQueue isEmpty!")
	})
	test("testing method shift", () => {
		decqueue.push(200)
		decqueue.push({ value: 155 })
		expect(decqueue.shift()).toBe(200)
		expect(decqueue.shift()).toEqual({ value: 155 })
		expect(() => decqueue.pop()).toThrow("DecQueue isEmpty!")
	})
})