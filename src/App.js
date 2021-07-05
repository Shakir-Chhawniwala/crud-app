import React, { useContext } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import CreatePost from "./components/Posts/CreatePosts/CreatePost";
import ReadPost from "./components/Posts/ReadPosts/ReadPost";
import UpdatePost from "./components/Posts/UpdatePosts/UpdatePost";
import LikePost from "./components/Posts/LikedPosts/LikePost";
import DisLikePost from "./components/Posts/DislikedPosts/DisLikePost";
import { BrowserRouter, Route } from "react-router-dom";
import { PostContext } from "./store/post-context";



function App() {
  const data = useContext(PostContext);

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        
        <Route path="/create-post" exact>
          <CreatePost />
        </Route>
        <Route path="/" exact>
          <ReadPost posts={data.posts} />
        </Route>
        <Route path="/update-post" exact>
          <UpdatePost />
        </Route>
        <Route path="/liked-post" exact>
          <LikePost />
        </Route>
        <Route path="/disliked-post" exact>
          <DisLikePost />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
