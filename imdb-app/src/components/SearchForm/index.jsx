import React, { useState, useContext } from "react";
import { SubmitFormContext } from "../../App.js";

export default function SearchForm() {
  const [inputContent, setInputContent] = useState("");
  const { setSearchContent } = useContext(SubmitFormContext);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSearchContent(inputContent)
        }}>
        <input
          placeholder="Search"
          value={inputContent}
          onChange={(e) => {
            setInputContent(e.target.value);
          }}
          type="text"
        />
      </form>
    </>
  );
};
