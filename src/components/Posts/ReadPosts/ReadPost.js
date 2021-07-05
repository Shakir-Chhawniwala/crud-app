import React,{ useState } from 'react'
import Pagination from "../../Pagination/Pagination";
import PostList from './PostList';

const ReadPost = ({posts}) => {
    const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(4);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);
    return (
      <div>
      <PostList posts={currentPost} />
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={posts.length}
          pageSize={postPerPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    );
}

export default ReadPost
