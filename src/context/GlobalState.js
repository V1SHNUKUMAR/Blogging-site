import React, { useState } from "react";
import MyContext from "./myContext";

const GlobalState = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [blogPostDetails, setBlogPostDetails] = useState({});

  const toggleLogin = () => {
    setIsLoggedIn((isLoggedIn) => !isLoggedIn);
  };

  return (
    <MyContext.Provider
      value={{ isLoggedIn, toggleLogin, blogPostDetails, setBlogPostDetails }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default GlobalState;
