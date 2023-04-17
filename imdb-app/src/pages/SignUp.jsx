import { AiOutlineHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


function SignUp() {
    const navigate = useNavigate();
    return <>
        <body>
            <header className="signUp-header">
                <button onClick={() => navigate("/")} className="go-home">
                    <AiOutlineHome size={20}></AiOutlineHome>
                </button>
                <h3>"Coisas"</h3>
            </header>
            <main>
                <form className="account-form">
                    <h2>Signup</h2>
                    <div>
                        <label>
                            <span >Email</span>
                            <input placeholder="Email" />
                        </label>
                        <label>
                            <span >Password</span>
                            <input type="password" placeholder="Password" />
                        </label>
                    </div>
                    <button>Signup</button>
                </form>
            </main>
        </body>

    </>
}

export default SignUp;