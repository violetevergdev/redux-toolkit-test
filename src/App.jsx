/** @format */

import React from "react";

import { Navbar } from "./app/Navbar";
import { PostsList } from "./features/posts/PostsList";
import { AddNewPost } from "./features/posts/AddNewPost";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <AddNewPost />
        <PostsList />
      </div>
    </>
  );
}

export default App;
