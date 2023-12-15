import { useCallback, useEffect, useState } from "react";
import { PostCard } from "../PostCard";
import { NoIssues, PostContainer } from "./styles";
import { api } from "../../lib/axios";
import { SearchForm } from "../SearchForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadCry } from "@fortawesome/free-regular-svg-icons";

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

    if (posts.length === 0) {
        return (
            <>
                <NoIssues>
                    Este usuário não possui issues
                    <FontAwesomeIcon icon={faFaceSadCry} />
                </NoIssues>
            </>
        )
    }

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