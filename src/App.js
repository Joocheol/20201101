import React, { useState } from "react";
import MathJax from "react-mathjax";
import "./styles.css";

export default function App() {
  // const MathJax = require("react-mathjax");
  // const tex = `f(x) = \\int_{-\\infty}^\\infty
  //   \\hat f(\\xi)\\,e^{2 \\pi i \\xi x}
  //   \\,d\\xi`;

  const [text, setText] = useState("");
  const handleOnChange = (e) => {
    // e.preventDefault();
    setText(e.target.value);
    console.log("3");
  };

  // useEffect(() => {
  //   console.log("1");
  //   console.log("2");
  // });

  return (
    <>
      <textarea onChange={handleOnChange} />
      <MathJax.Provider>
        <MathJax.Node formula={text} />
      </MathJax.Provider>
    </>
  );
}
