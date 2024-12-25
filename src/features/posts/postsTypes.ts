export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostsState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

export const FETCH_POSTS_REQUEST = "posts/fetchPostsRequest";