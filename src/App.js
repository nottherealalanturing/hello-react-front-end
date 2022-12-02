import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Greeting from "./Greeting";
import { fetchMessage } from "./redux/messages/messageSlice";

const App = () => {
  const dispatch = useDispatch();

  // useEffect(() => dispatch(fetchMessage()), []);

  useEffect(() => {
    async function fetchRandomMessage() {
      dispatch(fetchMessage());
    }

    fetchRandomMessage();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
