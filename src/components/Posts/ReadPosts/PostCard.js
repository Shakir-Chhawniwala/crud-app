import React, { useContext } from "react";
import "./PostCard.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import useToggle from "../../Toggle/useToggle";
import { PostContext } from "../../../store/post-context";
import Card from "../../UI/Card";

const PostCard = ({ title, body }) => {
  const [colorLike, setLikeColor] = useToggle(true);
  const [colorDisLike, setDisLikeColor] = useToggle(true);

  const context = useContext(PostContext);

  const handleLikeClick = (props) => {
    setLikeColor(false);

    const postLikeData = {
      title: title,
      body: body,
    };
    context.addlikedPost(postLikeData);
  };

  const handleDisLikeClick = (props) => {
    setDisLikeColor(false);

    const postData = {
      title: title,
      body: body,
    };
    context.addDisLikedPost(postData);
  };

  let likeIcon = colorLike ? "like-black-color" : "like-blue-color";
  let dislikeIcon = colorDisLike ? "dislike-black-color" : "dislike-blue-color";

  return (
    <li>
      <Card className="post-item">
        <h5>{title}</h5>
        <p>{body}</p>

        <div className="icons-container">
          <ThumbUpIcon className={likeIcon} onClick={handleLikeClick} />
          <ThumbDownIcon className={dislikeIcon} onClick={handleDisLikeClick} />
        </div>
      </Card>
    </li>
  );
};

export default PostCard;
