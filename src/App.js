import { useState } from "react";
import { Form } from "./form.js";
import { Header } from "./header.js";
import { PackingList } from "./packingList.js";
import { Stats } from "./stats.js";

const initialItems = [
	{ id: 1, description: "Passports", quantity: 2, packed: true },
	{ id: 2, description: "Socks", quantity: 12, packed: false },
	{ id: 3, description: "Back Bag", quantity: 2, packed: true },
	{ id: 4, description: "Candles", quantity: 22, packed: false },
];

function Color() {
	return (
		<section>
			<div className="color">🚗</div>
			<div className="color">🗺️</div>
			<div className="color">🧭</div>
		</section>
	);
}

function App() {
	const [items, setItems] = useState(initialItems);
	function addNewItem(item) {
		setItems((items) => [...items, item]);
	}

	function deleteItem(itemId) {
		const updatedItemList = items.filter((item) => item.id !== itemId);
		setItems((items) => updatedItemList);
	}

	function handleToggle(itemId) {
		setItems((items) =>
			items.map((item) =>
				item.id === itemId ? { ...item, packed: !item.packed } : item
			)
		);
	}

	function clearPackingList() {
		const confirmed = window.confirm(
			"Do you want to delete all items in packing list?"
		);
		if (confirmed) setItems((items) => []);
	}

	return (
		<div className="app">
			<Color />
			<Header />
			<div className="packing__box" id="Packing">
				<Form onAddItem={addNewItem} />
				<PackingList
					items={items}
					onDeleteItem={deleteItem}
					onPacking={handleToggle}
					onClearList={clearPackingList}
				/>
				<Stats items={items} />
			</div>
		</div>
	);
}

export default App;
