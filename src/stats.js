export function Stats({ items }) {
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
