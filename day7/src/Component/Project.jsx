import { useState } from "react";
import Swal from 'sweetalert2';
import Tryg from "./Product";

function Project() {
    const [state, setState] = useState("Signup");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [lpassword, setLpassword] = useState("");
    const [arr, setArr] = useState([]);

    const Signup = () => {
        const obj = {
            username: name,
            email: email,
            pass: password
        };
        setArr([...arr, obj]);
        setName('');
        setEmail('');
        setPassword('');
        setState("Login");
    };

    const handleLogin = () => {
        const data = arr.filter((el) => el.email === loginEmail && el.pass === lpassword);
        if (data.length > 0) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Login Successful",
                showConfirmButton: false,
                timer: 1500
            });
            setState("Tryg"); 
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Incorrect Information!",
            });
        }
    };

    return (
        <div>
            {state === "Signup" ? (
                <div className="main">
                    <p className="sign" align="center">Sign Up</p>
                    <input className="un" type="text" align="center" placeholder="Username" value={name} onChange={(e) => setName(e.target.value)} />
                    <input className="email" type="email" align="center" placeholder="Enter Your Email Id" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className="pass" type="password" align="center" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="submit" align="center" onClick={Signup}>Sign Up</button>
                    <p className="forgot" align="center" onClick={() => setState("Login")}>
                        Already Have an Account? Click to Login
                    </p>
                </div>
            ) : state === "Login" ? (
                <div className="main2">
                    <p className="sign" align="center">Login</p>
                    <input className="email" type="email" align="center" placeholder="Enter Your Email Id" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
                    <input className="pass" type="password" align="center" placeholder="Password" value={lpassword} onChange={(e) => setLpassword(e.target.value)} />
                    <button className="submit" align="center" onClick={handleLogin}> Login </button>
                    <p className="forgot" align="center" onClick={() => setState("Signup")}>
                        New User? Click Here to Sign Up!
                    </p>
                </div>
            ) : (
                <Tryg />
            )}
        </div>
    );
}

export default Project;
