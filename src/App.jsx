function App() {
	return (
		<div className="app">
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
			<div></div>
		</main>
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
