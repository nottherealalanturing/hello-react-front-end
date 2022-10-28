import React from "react";
import { useSelector } from "react-redux";

const Greeting = () => {
  const refreshPage = () => {
    window.location.reload();
  };

  const message = useSelector((state) => state.messages);
  return (
    <>
      <div className="message">
        <h1> Language: {message.language} </h1>
        <h1> : {message.greeting}</h1>
      </div>
      <button onClick={refreshPage}>Another Language</button>
    </>
  );
};

export default Greeting;
