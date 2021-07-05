import React, { useState } from "react";
import "./PostForm.css";

const PostForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPost, setEnteredPost] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const postChangeHandler = (event) => {
    setEnteredPost(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const postData = {
      title: enteredTitle,
      body: enteredPost,
    };

    props.onSavePostData(postData);
    setEnteredTitle("");
    setEnteredPost("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-post__controls">
        <div className="new-post__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-post__control">
          <label>Post</label>
          <input type="text" value={enteredPost} onChange={postChangeHandler} />
        </div>
      </div>
      <div className="new-post__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Post</button>
      </div>
    </form>
  );
};

export default PostForm;
