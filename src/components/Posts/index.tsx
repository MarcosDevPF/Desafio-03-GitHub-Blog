import { useCallback, useEffect, useState } from "react";
import { Post } from "../Post";
import { PostContainer } from "./styles";
import { api } from "../../lib/axios";
import { SearchForm } from "../SearchForm";

export interface InfoPost {
    title: string,
    body: string
    created_at: string,
    number: number
    html_url: string
    comments: number,
    user: {
        login: string
    }
}

export function Posts() {
    const [posts, setPosts] = useState<InfoPost[]>([])

    const getPosts = useCallback(
        async (query: string = "") => {
            try {
                const response = await api.get(
                    `/search/issues?q=${query}%20repo:MarcosDevPF/Desafio-03-GitHub-Blog`
                )
                setPosts(response.data.items)
            } finally {
            }
        },
        [posts]
    );

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <>
            <SearchForm postsQuantity={posts.length} getPosts={getPosts} />
            <PostContainer>
                {posts.map((post) => (
                    <Post key={post.number} post={post} />
                ))}
            </PostContainer>
        </>
    )
}