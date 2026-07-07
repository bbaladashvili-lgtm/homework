import { useState } from "react";
import axios from "axios";
import "./App.css";
import { IUser } from "./interfaces";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<IUser | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <h1>GitHub User Search</h1>
    </div>
  );
}

export default App;
