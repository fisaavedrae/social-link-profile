import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Avatar from "./assets/images/avatar-jessica.jpeg";
import "./App.css";
import BotonSocial from "./components/BotonSocial";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card d-flex flex-column justify-content-center align-items-center top-50 start-50">
        <img className="rounded rounded-circle" src={Avatar} alt="avatar" />
        <h1 className="mt-4">Jessica Randall</h1>
        <h3>London, United Kingdom</h3>
        <p>"Front-end developer and avid reader."</p>

        <div className="d-flex flex-column justify-content-center">
          <BotonSocial texto="GitHub" />
          <BotonSocial texto="Frontend Mentor" />
          <BotonSocial texto="LinkedIn" />
          <BotonSocial texto="Twitter" />
          <BotonSocial texto="Instagram" />
        </div>
      </div>
    </>
  );
}

export default App;
