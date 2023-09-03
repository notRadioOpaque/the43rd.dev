import { useEffect, useState } from "react";
import reactIcon from "../src/assets/react.svg";

const skillArr = [
	"Bootstrap",
	"CSS",
	"HTML",
	"Javascript",
	"React",
	"SASS",
	"Tailwind",
	"Typescript",
];

const toolsArr = ["Git", "Github", "Figma", "NPM", "VsCode"];

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
		<main className="main">
			<About />
			<SkillSet />
			<Bento />
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

function SkillSet() {
	return (
		<div className="skill-set">
			<h2 className="skill-set-heading">Technology</h2>
			<SkillGroup skillTitle={"Front-end"}>
				{Array.from({ length: 8 }, (_, i) => (
					<SkillItem key={i} skillItem={skillArr.at(i)} />
				))}
			</SkillGroup>

			<SkillGroup skillTitle={"Tools"}>
				{Array.from({ length: 5 }, (_, i) => (
					<SkillItem key={i} skillItem={toolsArr.at(i)} />
				))}
			</SkillGroup>
		</div>
	);
}

function SkillGroup({ skillTitle, children }) {
	return (
		<div>
			<h3 className="skill-group-title">{skillTitle}</h3>
			<div className="skill-group">{children}</div>
		</div>
	);
}

function SkillItem({ skillItem }) {
	return (
		<div className="skill-item">
			<span>
				<img src={reactIcon} alt="" />
			</span>
			<span>{skillItem}</span>
		</div>
	);
}

function Bento() {
	return (
		<div className="bento-wrapper">
			<div className="bento-container">
				<div className="bento-item"></div>
				<div className="bento-item"></div>
				<div className="bento-item"></div>
				<div className="bento-item"></div>
				<div className="bento-item"></div>
				<div className="bento-item"></div>
				<div className="bento-item"></div>
				<div className="bento-item"></div>
			</div>
		</div>
	);
}

function Footer() {
	return (
		<div className="footer-wrapper">
			<footer>
				<p>2023 - Que sera sera 🤞🏽</p>
				<p>
					Built with <span className="footer-link">Vite</span> &{" "}
					<span className="footer-link">React</span>
				</p>
			</footer>
		</div>
	);
}

export default App;
