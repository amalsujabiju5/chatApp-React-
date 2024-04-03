import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import Add from "../image/add.png";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formwrapper">
        <span className="logo">ChatApp</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="Password" />

          <button>Sign In</button>
          {err && <span> Something went wrong! </span>}
        </form>
        <p>
          You do not have an account? <Link to="/register">Register</Link>{" "}
        </p>
      </div>
    </div>
  );
}

export default Login;
