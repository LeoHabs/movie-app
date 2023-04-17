import { AiOutlineHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Firebase from "../gateway/Firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";


function SignUp() {
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const userCredentials = await createUserWithEmailAndPassword(
                Firebase.auth,
                emailInput,
                passwordInput
            );
        } catch (error) {
            console.log({ error });
        }

    };

    return <>
        <body>
            <header className="signUp-header">
                <button onClick={() => navigate("/")} className="go-home">
                    <AiOutlineHome size={20}></AiOutlineHome>
                </button>
                <h3>"Coisas"</h3>
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
        </body>

    </>
}

export default SignUp;