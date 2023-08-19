import { FaDiscord, FaFacebook, FaTwitter } from "react-icons/fa";
import { IconContext } from "react-icons";

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
        <span>the43rd</span>
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
      <ul className="docker-list">
        <DockItem>
          <FaTwitter />
        </DockItem>
        <DockItem>
          <FaFacebook />
        </DockItem>
        <DockItem>
          <FaDiscord />
        </DockItem>
        <DockItem>
          <FaTwitter />
        </DockItem>
        <DockItem>
          <FaFacebook />
        </DockItem>
        <DockItem>
          <FaDiscord />
        </DockItem>
      </ul>
    </div>
  );
}

function DockItem({ children }) {
  return (
    <li className="dock-item">
      <IconContext.Provider
        value={{
          style: {
            fontSize: "35px",
            color: "#000",
            padding: "10px",
            borderRadius: "50%",
            display: "block",
            background: "grey",
          },
        }}
      >
        <div>{children}</div>
      </IconContext.Provider>
    </li>
  );
}

export default App;
