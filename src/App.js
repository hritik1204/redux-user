import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Team from "./pages/Team/Team";

import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(20);

  const state = useSelector((state) => state.user.data);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  // const currentPosts = state && state.slice(firstPostIndex, lastPostIndex);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              state={state}
              lastPostIndex={lastPostIndex}
              firstPostIndex={firstPostIndex}
              postPerPage={postPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  );
}

export default App;
