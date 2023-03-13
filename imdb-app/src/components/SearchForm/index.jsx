import React, { useState } from "react";

export default function SearchForm() {
  const [inputContent, setInputContent] = useState();
  const [formContent, setFormContent] = useState();

  return (
    <>
      <form
        onSubmit={() => {
          setFormContent(inputContent);
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
}
