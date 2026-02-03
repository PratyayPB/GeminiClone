import React, { useContext, useState } from "react";
import assets from "../assets/gemini-clone-assets/assets.js";
import { Context } from "../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <>
      {/* Mobile Toggle Button (Visible only on mobile) */}
      <div className="absolute top-5 left-5 z-20 md:hidden">
        <button onClick={() => setExtended(!extended)}>
          <img className="w-6 cursor-pointer" src={assets.menu_icon} alt="Menu" />
        </button>
      </div>

      {/* Sidebar Container */}
      <div
        className={`fixed md:static top-0 left-0 h-screen bg-[#F0F4F9] z-10 transition-all duration-300 ease-in-out flex flex-col p-5 pl-3
        ${extended ? "translate-x-0 shadow-xl md:shadow-none w-64 md:w-[20vw]" : "-translate-x-full md:translate-x-0 w-64 md:w-[5vw]"}
        `}
      >
        <div className="sidebar-top ml-4 hidden md:block">
          <button onClick={() => setExtended(!extended)} className="cursor-pointer">
             <img className="w-5" src={assets.menu_icon} alt="" />
          </button>
        </div>

         {/* Mobile Close Button inside Sidebar */}
         <div className="sidebar-top ml-4 flex justify-between md:hidden mb-10">
            <div className="text-xl font-bold text-gray-500">Menu</div>
             <button onClick={() => setExtended(false)} className="cursor-pointer">
              {/* Using a simple X approach or reusing menu icon if preferred, but typically close icon is better. 
                  For now reusing logic or implicit close via clicking outside could work, but explicit button is safer.
                  I will assume user wants a close action. Using menu icon as placeholder or styled X. 
              */}
                 <span className="text-2xl">&times;</span>
            </button>
        </div>


        <div className="sidebar-middle flex flex-col items-start gap-7 mt-10 ">
          <button
            onClick={() => newChat()}
            className={`flex flex-row items-center cursor-pointer px-4 py-3 gap-3 rounded-full bg-[#e6eaf1] hover:bg-gray-300 transition-all duration-300 ${
              extended ? "w-full" : "w-10 h-10 justify-center p-0 rounded-full"
            }`}
          >
            <img className="w-5" src={assets.plus_icon} alt="" />
            {extended && <span className="text-sm text-gray-500">New Chat</span>}
          </button>

          {extended && (
            <div className="flex flex-col animate-fadeIn">
              <p className="ml-4 mb-4 text-sm text-gray-500">Recent</p>
              <div className="flex flex-col gap-2 max-h-[60vh] overflow-y-auto scrollbar-hide">
                {prevPrompts.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                        loadPrompt(item);
                        // Optional: Close sidebar on mobile after selection
                        if (window.innerWidth < 768) setExtended(false);
                    }}
                    className="flex items-center gap-3 p-2 pr-4 rounded-full hover:bg-[#e1e4e7] cursor-pointer text-gray-700"
                  >
                    <img className="w-5" src={assets.message_icon} alt="" />
                    <p className="text-sm truncate w-32">{item.slice(0, 18)}...</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="sidebar-foot mt-auto ml-4 mb-4">
           {/* Settings - simplified for now */}
           <div className={`flex items-center gap-3 cursor-pointer hover:bg-gray-200 p-2 rounded-full ${extended ? 'w-fit pr-4' : 'w-10 justify-center'}`}>
              <img className="w-5" src={assets.setting_icon} alt="" />
              {extended && <span className="text-sm text-gray-500">Settings</span>}
           </div>
        </div>
      </div>
      
       {/* Overlay for mobile when sidebar is open */}
       {extended && (
        <div 
            className="fixed inset-0 bg-black/50 z-0 md:hidden"
            onClick={() => setExtended(false)}
        ></div>
       )}
    </>
  );
};

export default Sidebar;
