import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isRegister, setIsRegister] = useState(true);

  function handleLogin() {
    console.log("Logging in with", username, password);
  }

  function handleRegister() {
    console.log("Registering with", username, password, email);
  }

  function handleSubmit() {
    if (isRegister) {
      handleRegister();
    } else {
      handleLogin();
    }
  }

  return (
    <div className="container">
      <div className="form-container">
        <h1>{isRegister ? "Register" : "Login"}</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isRegister && (
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        )}
        <button onClick={handleSubmit}>
          {isRegister ? "Register" : "Login"}
        </button>
        <button
          className="toggle-button"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister ? "Switch to Login" : "Switch to Register"}
        </button>
      </div>
    </div>
  );
}

export default Login;
