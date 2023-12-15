import { PostHeader } from "../../components/PostHeader";
import { PostContent } from "../../components/PostContent";
import { PostInfoContainer } from "./styles";

export function PostInfo() {
    return (
        <PostInfoContainer>
            <PostHeader />
            <PostContent />
        </PostInfoContainer>
    )
}