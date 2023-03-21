import React, { useContext } from "react";
import SearchForm from "../SearchForm";
import { ComingSoonBtnContext } from "../../App.js";
import LanguageSelector from "../LanguageSelector";

export default function Header() {
    const comingBtnState = useContext(ComingSoonBtnContext);

    return <>
        <header>
            <LanguageSelector></LanguageSelector>
            <button onClick={() => { comingBtnState.setClicked(!comingBtnState.btnClicked) }}>Coming Soon</button>
            <SearchForm></SearchForm>
        </header>
    </>
}