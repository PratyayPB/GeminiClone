import React from "react";
import { useState } from "react";
import { createContext } from "react";
import runPrompt from "../config/gemini";

export const Context = createContext();
const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 30 * index);
  };

  const newChat = () => {
    setLoading(false);
    setShowResult(false);
  };
  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;
    if (prompt) {
      response = await runPrompt(prompt);
      setRecentPrompt(prompt);
    } else {
      setPrevPrompts((prev) => [...prev, input]);
      setRecentPrompt(input);
      response = await runPrompt(input);
    }
    setRecentPrompt(input);

    let responseArr = response.split("**");
    let newResponse = [];
    responseArr.forEach((item, index) => {
      if (index % 2 === 0 || index === 0) {
        newResponse.push(item);
      } else {
        newResponse.push(`<b>${item}</b>`);
      }
    });
    let newResponse2 = newResponse.join("").split("*").join("</br></br>");
    let newResponseArr = newResponse2.split(" ");
    newResponseArr.forEach((item, index) => {
      const nextWord = item;
      delayPara(index, nextWord + " ");
    });
    setLoading(false);
    setInput(" ");
  };

  const contextValue = {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    prevPrompts,
    setPrevPrompts,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
    onSent,
    newChat,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
