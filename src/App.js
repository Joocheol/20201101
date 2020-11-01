import React, { useState } from "react";
import MathJax from "react-mathjax";
//import "./styles.css";

export default function App() {
  const [text, setText] = useState("");

  const handleOnChange = (e) => {
    setText(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <textarea onChange={handleOnChange} />
      <MathJax.Provider>
        <MathJax.Node formula={text} />
      </MathJax.Provider>
    </>
  );
}
