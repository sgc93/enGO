import { useState } from "react";
import { Form } from "./form.js";
import { Header } from "./header.js";
import { Stats } from "./stats.js";
import { Item } from "./item.js";

const initialItems = [
	{ id: 1, description: "Passports", quantity: 2, packed: true },
	{ id: 2, description: "Socks", quantity: 12, packed: false },
	{ id: 3, description: "Back Bag", quantity: 2, packed: true },
	{ id: 4, description: "Candles", quantity: 22, packed: false },
];

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
			<Header />
			<Form onAddItem={addNewItem} />
			<PackingList
				items={items}
				onDeleteItem={deleteItem}
				onPacking={handleToggle}
				onClearList={clearPackingList}
			/>
			<Stats items={items} />
		</div>
	);
}

function PackingList({ items, onDeleteItem, onPacking, onClearList }) {
	const [sortBy, setSortBy] = useState("input");
	let sortedItems;

	if (sortBy === "input") {
		sortedItems = items;
	} else if (sortBy === "description") {
		sortedItems = items
			.slice()
			.sort((a, b) => a.description.localeCompare(b.description));
	} else if (sortBy === "packed") {
		sortedItems = items.slice().sort((a, b) => a.packed - b.packed);
	}

	return (
		<div className="list">
			<div className="actions">
				<select
					value={sortBy}
					onChange={(e) => setSortBy((sortBy) => e.target.value)}
				>
					<option value="input">sort by input status</option>
					<option value="description">Sort by item description</option>
					<option value="packed">Sort by Packed Status</option>
				</select>
				<button onClick={onClearList}>clear</button>
			</div>
			<ul>
				{sortedItems.map((item) => (
					<Item
						item={item}
						onDeleteItem={onDeleteItem}
						onPacking={onPacking}
						key={item.id}
					/>
				))}
			</ul>
		</div>
	);
}

export default App;
