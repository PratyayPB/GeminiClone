import React from "react";
import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

const App = () => {
  const [toggleTheme, setToggleTheme] = useState(false);
  {
    /*AIzaSyDBrQMkEeVA5wkaAdpXIl1xLecxliRf7rE*/
  }
  return (
    <div
      className={`${
        toggleTheme ? "dark" : "light"
      } Out flex flex-row font-Outfit text-gray-700`}
    >
      <Sidebar />
      <Main />

      {/*
      <button onClick={() => setToggleTheme(!toggleTheme)}>
        {toggleTheme ? "Dark" : "Light"}
      </button>*/}
    </div>
  );
};

export default App;
