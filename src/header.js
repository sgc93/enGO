import { useEffect, useState } from "react";
import headerBg1 from "./header_bg/header_bg1.jpg";
import headerBg2 from "./header_bg/header_bg2.jpg";
import headerBg3 from "./header_bg/header_bg3.jpg";
import headerBg4 from "./header_bg/header_bg4.jpg";
import headerBg5 from "./header_bg/header_bg5.jpg";
import headerBg6 from "./header_bg/header_bg6.jpg";
import headerBg7 from "./header_bg/header_bg7.jpg";
import headerBg8 from "./header_bg/header_bg8.jpg";
import headerBg9 from "./header_bg/header_bg9.jpg";

const bgList = [
	headerBg1,
	headerBg2,
	headerBg3,
	headerBg4,
	headerBg5,
	headerBg6,
	headerBg7,
	headerBg8,
	headerBg9,
];

export function Header() {
	const [bg, setBg] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setBg((bg) => (bg + 1) % bgList.length);
		}, 10000);
	}, []);

	return (
		<div className="header" style={{ backgroundImage: `url(${bgList[bg]})` }}>
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
