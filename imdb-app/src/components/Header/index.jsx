import React, { useContext } from "react";
import SearchForm from "../SearchForm";
import { ComingSoonBtnContext } from "../../pages/Main";
import LanguageSelector from "../LanguageSelector";
import { HiUser } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../UserProvider";
import { FaUserAlt } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { signOut } from "firebase/auth";
import Firebase from "../../gateway/Firebase";


export default function Header() {
    const comingBtnState = useContext(ComingSoonBtnContext);
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    const getLeftElement = (contextUser = user) => {
        if (contextUser === null) {
            return <button
                onClick={() => navigate("login")}
            ><HiUser size={20}></HiUser></button>;
        };
        return <div className="loggedUser">
            <button onClick={() => signOut(Firebase.auth)}><BiLogOut color="red" size={20} /></button>
            <FaUserAlt />
            <h3>{contextUser?.email}</h3>
        </div>
    };

    return <>
        <header>
            {getLeftElement()}
            <LanguageSelector></LanguageSelector>
            <button onClick={() => { comingBtnState.setClicked(!comingBtnState.btnClicked) }}>Coming Soon</button>
            <SearchForm></SearchForm>
        </header>
    </>
}