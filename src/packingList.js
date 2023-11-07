import { useState } from "react";
import { Item } from "./item.js";

export function PackingList({ items, onDeleteItem, onPacking, onClearList }) {
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
