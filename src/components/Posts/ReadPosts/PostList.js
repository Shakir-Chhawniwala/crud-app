import React from "react";
import PostCard from "./PostCard";
import "./PostList.css"

const PostList = ({posts}) => {
 
  return (
    <ul className="posts-list">
      {posts.map((post) => {
        return <PostCard {...post} key={post.id} />;
      })}
    
    </ul>
  );
};

export default PostList;
