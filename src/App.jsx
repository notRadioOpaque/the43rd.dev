/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";

const skillArr = [
	{
		title: "Bootstrap",
		logo: "src/assets/bootstrap-logo.png",
		bgColor: "rgba(103,58,183, .1)",
	},
	{
		title: "CSS",
		logo: "src/assets/css-logo.png",
		bgColor: "rgba(114,175,220, .1)",
	},
	{
		title: "HTML",
		logo: "src/assets/html-logo.png",
		bgColor: "rgba(236,91,54, .1)",
	},
	{
		title: "Javascript",
		logo: "src/assets/javascript.png",
		bgColor: "rgba(251,215,74, .1)",
	},
	{
		title: "React",
		logo: "src/assets/react.svg",
		bgColor: "rgba(90,216,249, .1)",
	},
	{
		title: "SASS",
		logo: "src/assets/sass.png",
		bgColor: "rgba(228,131,174, .1)",
	},
	{
		title: "Tailwind",
		logo: "src/assets/tailwindcss.png",
		bgColor: "rgba(71,172,194, .1)",
	},
	{
		title: "Typescript",
		logo: "src/assets/typescript.png",
		bgColor: "rgba(32,118,210, .1)",
	},
];

const toolsArr = [
	{
		title: "Figma",
		logo: "src/assets/figma.png",
		bgColor: "rgba(230,75,50, .1)",
	},
	{
		title: "Git",
		logo: "src/assets/git-logo.png",
		bgColor: "rgba(238,81,53, .1)",
	},
	{
		title: "Github",
		logo: "src/assets/github.png",
		bgColor: "rgba(56,56,56, .1)",
	},
	{
		title: "NPM",
		logo: "src/assets/npm-logo.png",
		bgColor: "rgba(rgb(194,44,40, .1)",
	},
	{
		title: "VS Code",
		logo: "src/assets/visual-studio-code.png",
		bgColor: "rgba(46,136,209, .1)",
	},
];

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
				<h4>Hi, I'm Ismael Muyideen,</h4>
				<h3>Building digital products, brands, and experience.</h3>
				<p>
					A Frontend Developer and Visual Designer with experience in web
					design, brand identity and product design.
				</p>
			</div>

			<div className="profile-pic">
				<img src="src/assets/my-memoji.jpeg" alt="profile-pic" />
			</div>

			<button className="about-btn">
				Connect with me{" "}
				<span>
					<img src="src/assets/react.svg" alt="" />
				</span>
			</button>
		</div>
	);
}

function SkillSet() {
	return (
		<div className="skill-set">
			<h2 className="skill-set-heading">Skill Set</h2>
			<SkillGroup skillTitle={"Front-end"}>
				{Array.from({ length: 8 }, (_, i) => (
					<SkillItem
						key={i}
						skillItem={skillArr.at(i).title}
						skillLogo={skillArr.at(i).logo}
						bgColor={skillArr.at(i).bgColor}
					/>
				))}
			</SkillGroup>

			<SkillGroup skillTitle={"Tools"}>
				{Array.from({ length: 5 }, (_, i) => (
					<SkillItem
						key={i}
						skillItem={toolsArr.at(i).title}
						skillLogo={toolsArr.at(i).logo}
						bgColor={toolsArr.at(i).bgColor}
					/>
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

function SkillItem({ skillItem, skillLogo, bgColor }) {
	return (
		<div className="skill-item">
			<span style={{ background: `${bgColor}` }}>
				<img src={skillLogo} alt="" />
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
