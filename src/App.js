function App() {
	return (
		<div className="app">
			<Header />
			<Form />
			<PackingList />
			<Stats />
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

function Form() {
	return (
		<div className="add-form">
			<h3>What do you need for your trip?</h3>
		</div>
	);
}

function PackingList() {
	return <div className="list">List</div>;
}

function Stats() {
	return (
		<footer className="stats">
			<em>
				🎒 You have X items on your list, and you have already packed Y items
				(Z%).
			</em>
		</footer>
	);
}

export default App;
