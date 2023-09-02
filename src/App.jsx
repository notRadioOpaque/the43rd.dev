import { useEffect, useState } from "react";

function App() {
	return (
		<div className="app">
			<Intro />
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

function Header() {
	return (
		<header className="header">
			<div className="logo">
				<img src="/public/vite.svg" alt="logo" />
				<span>the43rd</span>
			</div>

			<div className="contact">
				<p>contact</p>
			</div>
		</header>
	);
}

function Main() {
	return (
		<main>
			<About />
		</main>
	);
}

function About() {
	return (
		<div className="about">
			<div className="text">
				<h3>
					Ismael <span className="footer-link">Muyideen</span>,
				</h3>
				<h4>Front-end Web Developer</h4>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta,
					dicta dolorum vitae illo reprehenderit eum.
				</p>
			</div>
			<div className="profile-pic">
				<img src="src/assets/my-memoji.jpeg" alt="profile-pic" />
			</div>
		</div>
	);
}

function Intro() {
	const [animation, setAnimation] = useState("");
	const [fold, setFold] = useState("");

	useEffect(() => {
		setTimeout(() => {
			setAnimation("active");
		}, 1000);

		setTimeout(() => {
			setAnimation("fade");
		}, 2000);

		setTimeout(() => {
			setFold("fold");
		}, 2500);
	}, []);

	return (
		<div className={`intro ${fold}`}>
			<h1 className="splash-screen-logo-header">
				<span className={`splash-screen-logo ${animation}`}>the43rd</span>
			</h1>
		</div>
	);
}

function Footer() {
	return (
		<footer>
			<p>2023 - Que sera sera 🤞🏽</p>
			<p>
				Built with <span className="footer-link">Vite</span> &{" "}
				<span className="footer-link">React</span>
			</p>
		</footer>
	);
}

export default App;
