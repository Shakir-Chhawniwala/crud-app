import React, { useState, useEffect} from 'react'
import axios from "axios";



export const PostContext = React.createContext({
  posts: [],
  likedPosts: [],
  disLikedPosts: [],
  addPostHandler: (post) => {},
  addlikedPost: (post) => {},
  addDisLikedPost: (post) => {},
});

export const PostContextProvider = (props) => {
const [posts, setPosts] = useState([])
const [likedPosts, setLikedPosts] = useState([]);
const [disLikedPosts, setDisLikedPosts] = useState([]);

 const addPostHandler = (post) => {
   setPosts((prevPost) => {
     return [post,...prevPost]
   })
 };
  const addlikedPost = (like) => {
    setLikedPosts((prevLike) => {
      return [like, ...prevLike];
    });
  };

const addDisLikedPost = (disLike) => {
  setDisLikedPosts((prevDisLike) => {
    return [disLike, ...prevDisLike];
  });
};

 useEffect(() => {
   const fetchPosts = async () => {
     const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
     setPosts(res.data);
   };
   fetchPosts();
 }, [posts]);
    return <PostContext.Provider value={{posts:posts,addPostHandler:addPostHandler, addlikedPost:addlikedPost,likedPosts:likedPosts, addDisLikedPost:addDisLikedPost, disLikedPosts:disLikedPosts}} >{props.children} </PostContext.Provider>
}



