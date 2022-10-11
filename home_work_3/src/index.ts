// Module
import DecQueue from "./module/dec_queue.js"

abstract class AppMain {
	static start(): void {
		const decqueue = new DecQueue()
		decqueue.push(10)
		decqueue.unshift(11)
		decqueue.push(12)
		console.log(decqueue.pop()) // 12
		console.log(decqueue.shift()) // 11
		console.log(decqueue.pop()) // 10
		console.log(decqueue.pop()) // Exception
	}
}

AppMain.start()
