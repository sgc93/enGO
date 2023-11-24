import { FaDribbble, FaGithub } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";

export function Contact() {
	return (
		<div className="app__contact" id="Contact">
			<div className="app__contact-box glass__box">
				<p>Contacts</p>
				<div className="social">
					<a href="#github">
						<FaGithub className="icon" />
					</a>
					<a href="#figma">
						<FiFigma className="icon" />
					</a>
					<a href="#dribble">
						<FaDribbble className="icon" />
					</a>
				</div>
				<p className="email">smachewgedefaw@gmail.com</p>
				<h4>&copy;2023, Smachew G.</h4>
			</div>
		</div>
	);
}
