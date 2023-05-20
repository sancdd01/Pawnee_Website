import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { signUp } from "../utilities";
import { useEffect, useState } from "react";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");

  return (
    <div>
      <div className="container">
        <form
          action=""
          onSubmit={(e) => [
            e.preventDefault(),
            signUp(firstName, lastName, email, password, department),
            setFirstName(""),
            setLastName(""),
            setEmail(""),
            setPassword(""),
            setDepartment(""),
          ]}
        >
          <h1 className="title">Sign up</h1>
          <input
            type="text"
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            value={department}
            placeholder="Department"
            onChange={(e) => setDepartment(e.target.value)}
          />
          <input type="submit" value="Create Account" />
        </form>
      </div>
    </div>
  );
}
