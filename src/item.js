export function Item({ item, onDeleteItem, onPacking }) {
	// const [isChecked, SetIsChecked] = useState(item.packed);
	return (
		<li className="glass__box">
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
