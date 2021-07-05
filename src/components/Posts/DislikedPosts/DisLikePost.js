import React, {useContext} from 'react'
import { PostContext } from "../../../store/post-context";
import PostCard from "../ReadPosts/PostCard";

const DisLikePost = () => {
      const context = useContext(PostContext);

      return (
        <ul className="posts-list">
          {context.disLikedPosts.map((post) => {
            return <PostCard {...post} key={post.id} />;
          })}
        </ul>
      );
}

export default DisLikePost
