import { useCallback, useEffect, useState } from "react";
import { PostCard } from "../PostCard";
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

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export function Posts() {
    const [posts, setPosts] = useState<InfoPost[]>([])

    const getPosts = useCallback(
        async (query: string = "") => {
            try {
                const response = await api.get(
                    `/search/issues?q=${query}%20repo:${username}/${repoName}`
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
                    <PostCard key={post.number} post={post} />
                ))}
            </PostContainer>
        </>
    )
}

