import React, { useContext } from "react";
import assets from "../assets/gemini-clone-assets/assets.js";
import { useState } from "react";
import { Context } from "../context/Context";
const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <div
      onMouseEnter={() => {
        setExtended(true);
      }}
      onMouseLeave={() => {
        setExtended(false);
      }}
      className={`flex flex-col bg-[#F0F4F9]  h-[100vh] items-start p-5 pl-3 transition-all duration-300 ${
        extended ? "w-[20vw]" : "w-[5vw]"
      }`}
    >
      <div className="sidebar-top ml-4 ">
        <button>
          <img className="w-5 cursor-pointer" src={assets.menu_icon} alt="" />
        </button>
      </div>

      <div className="sidebar-middle flex flex-col items-start gap-7 mt-10 ">
        <button
          onClick={() => newChat()}
          className={`flex flex-row items-center cursor-pointer px-4 py-7 gap-3 h-10 transition-opacity duration-1000 whitespace-nowrap overflow-hidden text-ellipsis ${
            extended ? "bg-[#e1e4e7] rounded-4xl " : ""
          }`}
        >
          <img className="w-5" src={assets.plus_icon} alt="" />
          <span
            className={`transition-opacity duration-1000 whitespace-nowrap overflow-hidden text-ellipsis ${
              extended ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            New Chat
          </span>
        </button>

        <div
          className={`transition-opacity duration-1000 whitespace-nowrap ml-2 overflow-hidden text-ellipsis flex flex-col gap-2 ${
            extended ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <p className="ml-1 cursor-default">Recent</p>

          <div className="recent-container flex flex-col gap-0.1 ">
            {prevPrompts.map((item) => {
              return (
                <div
                  onClick={() => loadPrompt(item)}
                  className="recent-card flex flex-row hover:bg-[#e1e4e7] hover:rounded-4xl p-2 cursor-pointer"
                >
                  <img className="h-7" src={assets.message_icon} alt="" />
                  <p>{item.slice(0, 20)}...</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="sidebar-foot mt-auto ml-4">
        <button>
          <img className="w-5" src={assets.setting_icon} alt="" />
          {/*Settings and help*/}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
