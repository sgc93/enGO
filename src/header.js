export function Header() {
	return (
		<div className="header">
			<div className="header__nav">
				<div className="logo">
					<img src="assets/images/logo.png" alt="logo"></img>
				</div>
				<div className="nav">
					<a href="#Contact" className="contact">
						Contact
					</a>
					<a href="https://github.com/sgc93/enGO" className="like">
						Like
					</a>
				</div>
			</div>
			<div className="header__content">
				<div className="header__content-title">
					<h1>🎒Pack</h1>
					<h4>Your Items Properly</h4>
				</div>
				<div className="header__content-btn">
					<a href="#Packing" className="glass__box">
						Start Packing
					</a>
				</div>
			</div>
		</div>
	);
}
