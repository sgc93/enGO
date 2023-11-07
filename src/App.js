import { useState } from "react";

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
	return (
		<div className="app">
			<Header />
			<Form onAddItem={addNewItem} />
			<PackingList
				items={items}
				onDeleteItem={deleteItem}
				onPacking={handleToggle}
			/>
			<Stats items={items} />
		</div>
	);
}

function Header() {
	return (
		<div className="header">
			<div className="logo">
				<img src="assets/images/logo.png" alt="logo"></img>
			</div>
			<div className="slogan">
				<h1>🎒Pack</h1>
				<h4>Your Items Properly</h4>
			</div>
		</div>
	);
}

function Form({ onAddItem }) {
	const [itemDescription, setItemDescription] = useState("");
	const [quantity, setQuantity] = useState(1);

	function handleSubmit(e) {
		e.preventDefault();
		if (itemDescription === "") return;

		const newItem = {
			id: Date.now(),
			description: itemDescription,
			quantity: quantity,
			packed: false,
		};

		onAddItem(newItem);

		setItemDescription("");
		setQuantity(1);
	}

	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<div className="input-item">
				<input
					type="text"
					placeholder="What do you need for your trip?"
					value={itemDescription}
					onChange={(e) => {
						setItemDescription(e.target.value);
					}}
				/>
				<select
					value={quantity}
					onChange={(e) => {
						setQuantity(Number(e.target.value));
					}}
				>
					{Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
						<option value={num} key={num}>
							{num}
						</option>
					))}
				</select>
			</div>
			<button type="submit">Add</button>
		</form>
	);
}

function PackingList({ items, onDeleteItem, onPacking }) {
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

function Item({ item, onDeleteItem, onPacking }) {
	// const [isChecked, SetIsChecked] = useState(item.packed);
	return (
		<li>
			<input
				type="checkbox"
				checked={item.packed}
				onChange={() => onPacking(item.id)}
			></input>
			<span style={item.packed ? { textDecoration: "line-through" } : {}}>
				{item.quantity} {item.description}
			</span>
			<button onClick={() => onDeleteItem(item.id)}>❌</button>
		</li>
	);
}

function Stats({ items }) {
	if (!items.length) {
		return (
			<p className="stats">
				{" "}
				<em>Start add items in your packing list 🚀</em>
			</p>
		);
	}

	const numOfItems = items.length;
	const numOfPacked = items.filter((item) => item.packed).length;
	const packedPercent = Math.round((numOfPacked / numOfItems) * 100);
	return (
		<footer className="stats">
			<em>
				{packedPercent === 100
					? "You have Packed all your Items, READY TO GO! ✈️🌍"
					: `🎒 You have ${numOfItems} items on your list,`}
				{numOfPacked === 0
					? "but You haven't started packing yet, START PACKING!"
					: ` and you have already packed ${numOfPacked} items ( ${packedPercent}%).`}
			</em>
		</footer>
	);
}

export default App;
