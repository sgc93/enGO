import { useState } from "react";
export function Form({ onAddItem }) {
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
