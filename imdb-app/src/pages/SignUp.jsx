import { AiOutlineHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Firebase from "../gateway/Firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserProvider.js";
import { FaUserAlt } from "react-icons/fa";


function SignUp() {
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            createUserWithEmailAndPassword(
                Firebase.auth,
                emailInput,
                passwordInput
            )
        } catch (error) {
            console.log({ error });
        }

    };

    useEffect(()=>{
        
    },[user])

    return <>
        <div>
            <header className="signUp-header">
                <button onClick={() => navigate("/")} className="go-home">
                    <AiOutlineHome size={30}></AiOutlineHome>
                </button>

                <div>
                    <FaUserAlt size={25} />
                    <h3>{user?.email}</h3>
                </div>
            </header>
            <main>
                <form className="account-form" onSubmit={(e) => onSubmitHandler(e)}>
                    <h2>Signup</h2>
                    <div>
                        <label>
                            <span >Email</span>
                            <input value={emailInput} onChange={(e) => setEmailInput(e.target.value)} placeholder="Email" />
                        </label>
                        <label>
                            <span >Password</span>
                            <input value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} type="password" placeholder="Password" />
                        </label>
                    </div>
                    <button type="submit">Signup</button>
                </form>
            </main>
        </div>

    </>
}

export default SignUp;