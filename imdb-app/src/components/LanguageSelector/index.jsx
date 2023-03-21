import React, { useContext, useState } from "react";
import { MovieListContext } from "../../App";

export default function LanguageSelector() {
    const [selectOption, setSelectOption] = useState("en");
    const setAppLang = useContext(MovieListContext).setAppLang;

    return <>
        <select value={selectOption} onChange={(e) => {
            setSelectOption(e.target.value);
            setAppLang(e.target.value)
        }}>
            <option value={"en"}>English</option>
            <option value={"es"}>Español</option>
            <option value={"pt"}>Portuguese</option>
            <option value={"jn"}>日本語 </option>
            <option>Polski</option>
        </select>
    </>;
}

