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
    <div className="w-full bg-white flex flex-col justify-between max-h-[100vh] gap-1">
      <div className="main-top flex justify-between px-7 pt-6 text-lg font-medium">
        <p>Gemini</p>

        <div className="right-top flex gap-8">
          <button>Upgrade</button>
          <img
            className="w-10 h-10 rounded-full"
            src={assets.user_icon}
            alt=""
          />
        </div>
      </div>
      <div className="main-content  h-[65vh] w-[65%] mx-auto overflow-y-scroll scrollbar-hide">
        {!showResult ? (
          <div className="flex flex-col items-baseline  justify-between gap-25">
            <div className="hero-text text-[56px] font-semibold leading-none ">
              <span className=" text-transparent bg-clip-text bg-[linear-gradient(to_right,_#4b90ff,_#ff5546)] ">
                Hello, Dev
              </span>{" "}
              <br />
              How can i help you today?
            </div>
            <div className="card-container flex gap-10 max-w-full">
              <div className="card bg-[#E5E6E8] relative px-4 py-3 h-50 w-50 rounded-2xl">
                <p className="text-start mr-4">
                  Suggest upcoming places to see on an upcoming road trip
                </p>
                <img
                  className="w-7 absolute bottom-3 right-2"
                  src={assets.compass_icon}
                  alt=""
                />
              </div>
              <div className="card bg-[#E5E6E8] relative px-4 py-3 h-50 w-50 rounded-2xl">
                <p className="text-start mr-4">
                  Suggest upcoming places to see on an upcoming road trip
                </p>
                <img
                  className="w-7 absolute bottom-3 right-2"
                  src={assets.bulb_icon}
                  alt=""
                />
              </div>
              <div className="card bg-[#E5E6E8] relative px-4 py-3 h-50 w-50 rounded-2xl">
                <p className="text-start mr-4">
                  Suggest upcoming places to see on an upcoming road trip
                </p>
                <img
                  className="w-7 absolute bottom-3 right-2"
                  src={assets.message_icon}
                  alt=""
                />
              </div>
              <div className="card bg-[#E5E6E8] relative px-4 py-3 h-50 w-50 rounded-2xl">
                <p className="text-start mr-4">
                  Suggest upcoming places to see on an upcoming road trip
                </p>
                <img
                  className="w-7 absolute bottom-3 right-2"
                  src={assets.code_icon}
                  alt=""
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="result w-full flex flex-col gap-5">
            <div className="result-title flex gap-5 items-center">
              <img
                src={assets.user_icon}
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <p className="text-xl font-medium">{recentPrompt}</p>
            </div>

            <div className="result-data max-h-full overflow-y-scroll">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader flex flex-col gap-4">
                  <hr className="w-full rounded-2xl border-0 bg-[linear-gradient(to_right,#9ed7ff,#ffffff,#9ed7ff)] h-5 animate-pulse" />
                  <hr className="w-full rounded-2xl border-0 bg-[linear-gradient(to_right,#9ed7ff,#ffffff,#9ed7ff)] h-5 animate-pulse" />
                  <hr className="w-full rounded-2xl border-0 bg-[linear-gradient(to_right,#9ed7ff,#ffffff,#9ed7ff)] h-5 animate-pulse" />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="searchbox flex w-[60vw] mx-auto bg-[#e5e6e8] h-12 rounded-[48px]  px-5 ">
        <input
          type="text"
          placeholder="What is the full form of HTML?"
          className="w-[88%] border-0 outline-0 focus:ring-0 text-gray-700"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              onSent();
            }
          }}
        />
        <div className="searchbox-icons flex my-auto gap-3 ">
          <img className="w-7 h-fit" src={assets.gallery_icon} alt="" />
          <img className="w-7 h-fit" src={assets.mic_icon} alt="" />
          <img
            className="w-7 h-fit cursor-pointer"
            onClick={() => onSent()}
            src={assets.send_icon}
            alt=""
          />
        </div>
      </div>
      <div className="main-footer text-center pb-2">
        <p className="text-xs">
          Gemini may display inaccurate info, including about people, so
          double-check its responses. Your privacy and Gemini Apps
        </p>
      </div>
    </div>
  );
};

export default Main;
