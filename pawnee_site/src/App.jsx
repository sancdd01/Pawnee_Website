import "./App.css";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { currUser, logOut } from "./utilities";
import { getToken } from "./components/CsrfToken";

function App() {
  const [user, setUser] = useState(null);
  const [newUser, setNewUser] = useState(false);
  getToken();

  useEffect(() => {
    const getCurrUser = async () => {
      setUser(await currUser());
    };
    getCurrUser();
  }, [newUser]);

  return (
    <div className="App">
      <h1>App Comp: Welcome to Pawnee {user && user.first_name}</h1>
      <button onClick={() => logOut(setNewUser)}>Log Out</button>
      <Outlet />
    </div>
  );
}

export default App;
