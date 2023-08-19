function App() {
  return (
    <div className="app">
      <Header />
      <Docker />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/public/vite.svg" alt="logo" />
      </div>

      <div className="contact">
        <p>contact</p>
      </div>
    </header>
  );
}

function Docker() {
  return (
    <div className="docker">
      <ul></ul>
    </div>
  );
}

export default App;
