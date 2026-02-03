import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

const App = () => {
  return (
    <div className={`flex flex-col md:flex-row font-Outfit text-gray-700 min-h-screen bg-white`}>
      <Sidebar />
      <div className="flex-1 min-h-screen relative">
          <Main />
      </div>

      {/*
      <button onClick={() => setToggleTheme(!toggleTheme)}>
        {toggleTheme ? "Dark" : "Light"}
      </button>*/}
    </div>
  );
};

export default App;
