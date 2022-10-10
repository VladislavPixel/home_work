// Module
import LinkedList from "./modules/linkedList.js"

abstract class MainApp{
	static start(): void {
		const list = new LinkedList()
		list.add(1)
		list.add(2)
		list.add(3)
		list.add(4)
		const iterator = list[Symbol.iterator]()
		for (const node of list) {
			console.log(node)
			if (node) console.log(`his value: ${node.getValueNode()}`)
		}
		for (const el of iterator) {
			console.log(el, "EL iterator")
		}
	}
}

MainApp.start()