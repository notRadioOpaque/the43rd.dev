/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import downloadIcon from "../src/assets/download-icon.png";
import Table from "./components/Table";
import axios from "axios";

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

const works = [
	{
		organization: 'Shawn Xchange',
		start: 'August 2023',
		end: 'present',
		role: 'Junior Frontend Developer',
		activities: [
			'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more',
			'Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements',
			'Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders',
			'Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship'
		], 
		id: 0
	},
	{
		organization: 'Scout Studio',
		start: 'Spring 2016',
		end: 'Spring 2017',
		role: 'Developer',
		activities: [
			'Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community',
			'Built and delivered technical solutions according to stakeholder business requirements',
		],
		id: 1
	},
	{
		organization: 'Starry',
		start: 'July',
		end: 'December 2016',
		role: 'Software Engineer Co-op',
		activities: [
			"Engineered and improved major features of Starry's customer-facing Android web app using ES6, Handlebars, Backbone, Marionette, and CSS",
			'Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with the Starry Station internet router',
			'Collaborated with designers and other developers to ensure thoughtful and consistent user experiences across Starry’s iOS and Android mobile apps'
		],
		id: 2
	},
	{
		organization: 'MullenLowe',
		start: 'July',
		end: 'December 2015',
		role: 'Creative Technologist Co-op',
		activities: [
			'Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery',
			'Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness',
			'Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more'
		],
		id: 3
	}
] 

const column = [
	{ heading: 'Name', value: 'name' },
	{ heading: 'Email', value: 'email' },
	{ heading: 'Phone', value: 'phone' },
	{heading: 'City', value: 'address.city'},
]

function App() {
	const [dataTable, setDataTable] = useState([]);
    // console.log(dataTable);

	useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users').then(res => setDataTable(res.data)).catch(err => console.log(err))
	}, []);
	
	return (
		<div className="app">
			<Intro />
			<Header />
			<Main />
			<Table data={dataTable} column={column} />
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
				<ul>
					<li>
						<span className="index">01.</span>
						<a href="">About</a>
					</li>
					<li>
						<span className="index">02.</span>
						<a href="">Experience</a>
					</li>
					<li>
						<span className="index">03.</span>
						<a href="">Work</a>
					</li>
					<li>
						<span className="index">04.</span>
						<a href="">Contact</a>
					</li>
				</ul>
			</div>
		</header>
	);
}

function Main() {
	return (
		<main className="main">
			<About />
			<AboutMe />
			<SkillSet />
			<Work />
		</main>
	);
}

function About() {
	return (
		<div className="about">
			<div className="text">
				<h4 className="glow-text">Hi, my name is</h4>
				<h2>Ismael Muyideen.</h2>
				<h3>I build things for the web.</h3>
				<p>
					A Frontend Developer and Visual Designer with experience in web
					design, brand identity and product design. Currently, I’m focused on
					building accessible, human-centered products at{" "}
					<span>
						<a className="glow-text" href="#">
							Shawn Xchange
						</a>
					</span>
				</p>

				<button className="about-btn">
					Grab a copy of my Resumè{" "}
					<span>
						<img src={downloadIcon} alt="" />
					</span>
				</button>
			</div>
		</div>
	);
}

function AboutMe() {
	return <div className="about-me">
		<div className="heading">
			<span className="heading-number glow-text">01.</span>
			<h3>About Me</h3>
			<span className="line"></span>
		</div>

		<div className="content">
			<div className="about-me-text">
				<p>Hello! My name is Ismael and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!</p>
				<p>Fast-forward to today, and I’ve had the privilege of working at <a className="glow-text" href="">Shawn Xchange.</a> My main focus these days is building accessible, inclusive products and digital experiences at <a className="glow-text" href="">Shawn Xchange</a> for a variety of clients.</p>
			</div>
			<div className="image">
				<img src='src/assets/my-memoji.jpeg' alt="" />
			</div>
		</div>
	</div>
}

function Work() {
	const [selectedWork, setSelectedWork] = useState(works[0]);

	function handleSelectWork(work) {
		setSelectedWork(work);
		console.log(selectedWork);
	}


	return <div className="work">
		<div className="heading">
			<span className="heading-number glow-text">02.</span>
			<h3>Where i've worked</h3>
			<span className="line"></span>
		</div>

		<div className="content">
			<div className="sidebar">
				<ul className="work-list">
					{works.map((work, index) => <WorkItem work={work} selectedWork={selectedWork} onSelectWork={handleSelectWork}  key={index}/>)}
				</ul>
			</div>
			<div className="details">
				<WorkItemDetails work={selectedWork} />
			</div>
		</div>
	</div>
}

function WorkItem({ work, onSelectWork, selectedWork }) {
	const isSelected = selectedWork.id === work.id;
	console.log();
	return <div className={isSelected ? 'active-work' : ''}>
		<li onClick={() => onSelectWork(work)}>{work.organization}</li>
	</div>
}

function WorkItemDetails({work}) {
	return <div className="work-details">
	<h4>{work.role} @ <span className="glow-text">{work.organization}</span></h4>
	<p>{work.start} to {work.end}</p>
	{work.activities.map((activity, i) => <li key={i}>{activity}</li>)}
</div>
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
