// src/components/Posts.tsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store"; // RootState for type inference
import { fetchPostsRequest } from "../features/posts/postsSlice";
import { Post } from "../features/posts/postsTypes";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector(
    (state: RootState) => state.posts
  );

  useEffect(() => {
    dispatch(fetchPostsRequest()); // Dispatch action to fetch posts when the component mounts
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
