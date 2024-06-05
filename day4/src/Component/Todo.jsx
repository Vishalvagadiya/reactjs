import { useState } from "react";

function Todo() {

    let [isLogin, setIsLogin] = useState(true);
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [users, setUsers] = useState([]);
  
    const handleLoginChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      let user = { username, password };
      if (isLogin) {
        
        console.log("Logging in with", user);
      } else {
        
        console.log("Signing up with", user);
        setUsers([...users, user]);
      }
      
      setUsername("");
      setPassword("");
    };
  
    const toggleForm = () => {
      setIsLogin(!isLogin);
    };
  
    console.log(users);
  
    return (
      <div className="todo-container">
      
        <div>
          {isLogin ? (
            <div>
              <h1>Login</h1>
              <form onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={handleLoginChange}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <button type="submit">Login</button>
              </form>
            </div>
          ) : (
            <div>
              <h1>Signup</h1>
              <form onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={handleLoginChange}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <button type="submit">Signup</button>
              </form>
            </div>
          )}
          <button onClick={toggleForm}>
            {isLogin ? "Switch to Signup" : "Switch to Login"}
          </button>
        </div>
       
        <div>
          <h2>Users List</h2>
          {users.map((user, index) => (
            <div key={index}>
                <div>
              <li>{user.username}</li>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Todo;