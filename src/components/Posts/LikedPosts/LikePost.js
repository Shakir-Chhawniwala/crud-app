import React, {useContext} from 'react'
import { PostContext } from "../../../store/post-context"
import PostCard from "../ReadPosts/PostCard"

const LikePost = () => {
     const context = useContext(PostContext);

    return (
    <ul className="posts-list">
      {context.likedPosts.map((post) => {
        return <PostCard {...post} key={post.id} />;
      })}
    
    </ul>
  );
}; 


export default LikePost
