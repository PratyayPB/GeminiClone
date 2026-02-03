import React from "react";
import assets from "../assets/gemini-clone-assets/assets";
import { Context } from "../context/Context";
import { useContext } from "react";
import "../App.css";

const Main = () => {
  const {
    input,
    setInput,
    recentPrompt,
    showResult,
    loading,
    resultData,
    onSent,
  } = useContext(Context);
  return (
    <div className="flex-1 min-h-screen relative pb-[15vh]">
      <div className="flex items-center justify-between p-5 text-xl font-medium text-gray-500">
        <p>Gemini</p>
        <div className="flex items-center gap-5">
            {/* Upgrade button hidden on small screens if desired, or keep it. keeping for now */}
             <button className="hidden md:block py-2 px-4 bg-gray-100 rounded-full text-sm text-black hover:bg-gray-200 transition-colors">Upgrade</button>
            <img className="w-10 h-10 rounded-full" src={assets.user_icon} alt="" />
        </div>
      </div>

      <div className="max-w-[900px] mx-auto">
        {!showResult ? (
          <>
            <div className="my-12 text-4xl md:text-[56px] text-gray-300 font-semibold p-5 leading-tight">
              <p>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4b90ff] to-[#ff5546]">
                  Hello, Dev.
                </span>
              </p>
              <p>How can I help you today?</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
              <div className="h-[200px] p-4 bg-gray-100 rounded-xl relative cursor-pointer hover:bg-gray-200 transition-colors">
                <p className="text-gray-500 text-lg">Suggest beautiful places to see on an upcoming road trip</p>
                <img className="w-9 p-1 absolute bg-white rounded-full bottom-2 right-2" src={assets.compass_icon} alt="" />
              </div>
              <div className="h-[200px] p-4 bg-gray-100 rounded-xl relative cursor-pointer hover:bg-gray-200 transition-colors">
                <p className="text-gray-500 text-lg">Briefly summarize this concept: urban planning</p>
                <img className="w-9 p-1 absolute bg-white rounded-full bottom-2 right-2" src={assets.bulb_icon} alt="" />
              </div>
              <div className="h-[200px] p-4 bg-gray-100 rounded-xl relative cursor-pointer hover:bg-gray-200 transition-colors">
                <p className="text-gray-500 text-lg">Brainstorm team bonding activities for our work retreat</p>
                <img className="w-9 p-1 absolute bg-white rounded-full bottom-2 right-2" src={assets.message_icon} alt="" />
              </div>
              <div className="h-[200px] p-4 bg-gray-100 rounded-xl relative cursor-pointer hover:bg-gray-200 transition-colors">
                <p className="text-gray-500 text-lg">Tell me about React js and React native</p>
                <img className="w-9 p-1 absolute bg-white rounded-full bottom-2 right-2" src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="py-0 px-[5%] max-h-[70vh] overflow-y-scroll scrollbar-hide">
            <div className="my-10 flex items-center gap-5">
              <img className="w-10 h-10 rounded-full" src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="flex items-start gap-5">
              <img className="w-10 rounded-full" src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="w-full flex flex-col gap-2">
                  <hr className="rounded-md border-0 bg-gray-200 h-5 bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[length:800px_50px] animate-pulse" />
                  <hr className="rounded-md border-0 bg-gray-200 h-5 bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[length:800px_50px] animate-pulse" />
                  <hr className="rounded-md border-0 bg-gray-200 h-5 bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[length:800px_50px] animate-pulse" />
                </div>
              ) : (
                <p className="text-lg font-light leading-[1.8]" dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="absolute bottom-0 w-full max-w-[900px] px-5 pb-5 md:pb-8 mx-auto left-0 right-0 bg-white">
          <div className="flex items-center justify-between gap-5 bg-gray-100 py-2.5 px-5 rounded-full">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="flex-1 bg-transparent border-0 outline-none text-lg p-2"
              type="text"
              placeholder="Enter a prompt here"
               onKeyDown={(e) => {
                if (e.key == "Enter") {
                  onSent();
                }
              }}
            />
            <div className="flex items-center gap-3">
              <img className="w-6 cursor-pointer" src={assets.gallery_icon} alt="" />
              <img className="w-6 cursor-pointer" src={assets.mic_icon} alt="" />
              {input && <img onClick={() => onSent()} className="w-6 cursor-pointer" src={assets.send_icon} alt="" />}
            </div>
          </div>
          <p className="text-xs text-center text-gray-500 mt-4 mx-auto font-light">
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
