import { AiOutlineHome, AiOutlineUserAdd } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Firebase from "../gateway/Firebase.js";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../UserProvider.js";
import { FaUserAlt } from "react-icons/fa";
import { signInWithEmailAndPassword } from "firebase/auth";
import SuccessMessage from "../components/SuccessMessage.jsx";

function SignIn() {
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const [isSuccess, setIsSuccess] = useState(false);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const userCredentials = await signInWithEmailAndPassword(
                Firebase.auth,
                emailInput,
                passwordInput
            );
        } catch (error) {
            console.log({ error });
        }
    };


    useEffect(() => {
        user ? setIsSuccess(true) : setIsSuccess(false);
    }, [user])

    return <>
        <div className="login-container">
            <header className="signUp-header">
                <button onClick={() => navigate("/")} className="go-home">
                    <AiOutlineHome size={30}></AiOutlineHome>
                </button>
                <button onClick={() => navigate("/sign-up")}>
                    <AiOutlineUserAdd size={25} />
                    Create an Account
                </button>
                <div>
                    <FaUserAlt size={25} />
                    <h3>{user?.email}</h3>
                </div>
            </header>
            <main>
                <form className="account-form" onSubmit={(e) => onSubmitHandler(e)}>
                    {isSuccess ? <SuccessMessage /> :
                        <div>
                            <h2>Login</h2>
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
                            <button type="submit">Login</button>
                        </div>}
                </form>
            </main>
        </div>
    </>
}

export default SignIn;