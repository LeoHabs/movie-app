import React, { useContext } from "react";
import SearchForm from "../SearchForm";
import { ComingSoonBtnContext } from "../../pages/Main";
import LanguageSelector from "../LanguageSelector";
import { HiUser } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const comingBtnState = useContext(ComingSoonBtnContext);
    const navigate = useNavigate();

    return <>
        <header>
            <button
                onClick={() => navigate("sign-up")}
            ><HiUser size={20}></HiUser></button>
            <LanguageSelector></LanguageSelector>
            <button onClick={() => { comingBtnState.setClicked(!comingBtnState.btnClicked) }}>Coming Soon</button>
            <SearchForm></SearchForm>
        </header>
    </>
}