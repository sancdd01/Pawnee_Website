import { useEffect, useState } from "react";
import { logIn } from "../utilities";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const success = await logIn(email, password);
          if (success) {
            alert("Login Successful");
            setEmail("");
            setPassword("");
          } else {
            alert("Login Failed");
          }
        }}
      >
        <h1 className="title">Log In</h1>
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Log In" />
      </form>
    </div>
  );
}
