// TypeScript models
import type { BaseStructure } from "./models/baseStructure.js"
// Module
import Queue from "./module/queue.js"

abstract class AppMain {
	static start(): void {
		const queue: BaseStructure.IQueue = new Queue()
		queue.push(10)
		queue.push(11)
		queue.push(12)
		console.log(queue.head, "Голова")
		console.log(queue.pop(), "Удаленный")

		console.log(queue.head, "Голова")
		console.log(queue.pop(), "Удаленный")

		console.log(queue.head, "Голова")
		console.log(queue.pop(), "Удаленный")

		console.log(queue.head, "Голова")
		queue.pop()
	}
}

AppMain.start()