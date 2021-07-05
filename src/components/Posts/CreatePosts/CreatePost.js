import React, { useState, useContext } from "react";
import PostForm from "./PostForm";
import "./CreatePost.css";
import { PostContext } from "../../../store/post-context";


const CreatePost = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  
  const context = useContext(PostContext);

  const savePostDataHandler = (enteredPost) => {
    
    const postData = {
      ...enteredPost,
      id: Math.random().toString(),
    };

    context.addPostHandler(postData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-post">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Post</button>
      )}
      {isEditing && (
        <PostForm
          onSavePostData={savePostDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default CreatePost;
