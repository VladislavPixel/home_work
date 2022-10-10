// Module
import LinkedList from "./modules/linkedList.js"

abstract class MainApp{
	static start(): void {
		const list = new LinkedList()
		list.add(1)
		list.add(2)
		list.add(3)
		list.add(4)
		console.log(list, "LIST")
		list.displayLinkedList()
	}
}

MainApp.start()