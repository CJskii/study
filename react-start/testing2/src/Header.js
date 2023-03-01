import React, { useState } from "react";

const Header = ({ text }) => {
  const [headerText, setHeaderText] = useState(text);

  const click = () => {
    if (headerText === "text") {
      setHeaderText("pass");
    } else {
      setHeaderText("text");
    }
  };

  return (
    <div>
      <h1>{headerText}</h1>
      <button onClick={click}>Click me</button>
    </div>
  );
};

export default Header;
