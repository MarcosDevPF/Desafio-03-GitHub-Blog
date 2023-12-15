import { PostHeader } from "../../components/PostHeader";
import { PostContent } from "../../components/PostContent";
import { PostInfoContainer } from "./styles";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { InfoPost } from "../../components/Posts";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export function PostInfo() {
    const [postDetails, setPostDetails] = useState<InfoPost>({} as InfoPost)
    const [isLoading, setIsLoading] = useState(true)

    const { number } = useParams();

    const getPostsDetails = useCallback(
        async () => {
            try {
                setIsLoading(true)

                const response = await api.get(
                    `/repos/${username}/${repoName}/issues/${number}`
                );

                setPostDetails(response.data)
            } finally {
                setIsLoading(false)
            }
        },
        [postDetails]
    );

    useEffect(() => {
        getPostsDetails();
    }, [])

    return (
        <PostInfoContainer>
            <PostHeader isLoading={isLoading} postDetails={postDetails} />
            {!isLoading && <PostContent content={postDetails.body} />}
        </PostInfoContainer>
    )
}