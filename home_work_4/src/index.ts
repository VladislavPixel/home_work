// TypeScript interface
import type { IStack } from "./interface/i_stack.js"
// Module
import Stack from "./module/stack.js"

abstract class AppMain {
	static start() {
		const stack: IStack = new Stack()
		stack.push(10)
		stack.push(11)
		stack.push(12)

		console.log(stack.head)  // 12

		console.log(stack.pop()) // 12

		console.log(stack.head)  // 11

		console.log(stack.pop()) // 11
		console.log(stack.pop()) // 10
		console.log(stack.pop()) // Exception
	}
}

AppMain.start()
