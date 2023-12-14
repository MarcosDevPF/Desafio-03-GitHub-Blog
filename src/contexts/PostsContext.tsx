import { ReactNode, createContext, useState, useEffect } from "react";
import { api } from "../lib/axios";

interface Post {
  number: number
  url: string
  title: string,
  created_at: string,
  body: string
  comments: number,
  login: string
}

interface PostContextType {
  posts: Post;
  fetchPosts: (query?: string) => void
}

interface PostsProviderProps {
  children: ReactNode;
}

export const PostsContext = createContext({} as PostContextType)

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Post | null>(null);

  async function fetchPosts(query?: string) {
    const response = await
      api.get(`/repos/MarcosDevPF/Desafio-03-GitHub-Blog/issues/1`)

    setPosts(response.data);
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  if (!posts) {
    return (
      <>
        loading...
      </>
    )
  }

  return (
    <PostsContext.Provider
      value={{
        posts,
        fetchPosts
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}