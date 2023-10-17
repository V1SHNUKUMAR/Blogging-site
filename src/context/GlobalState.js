import React, { useState } from "react";
import MyContext from "./myContext";

const GlobalState = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn((isLoggedIn) => !isLoggedIn);
  };

  return (
    <MyContext.Provider value={{ isLoggedIn, toggleLogin }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default GlobalState;
