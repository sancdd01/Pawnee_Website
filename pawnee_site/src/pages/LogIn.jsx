import { useEffect, useState } from "react";
import { logIn } from "../utilities";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Log In</h1>
      <form
        onSubmit={(e) => [
          e.preventDefault(),
          logIn(email, password),
          setEmail(""),
          setPassword(""),
        ]}
      >
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
        <input type="submit" value="logIn" />
      </form>
    </div>
  );
}
