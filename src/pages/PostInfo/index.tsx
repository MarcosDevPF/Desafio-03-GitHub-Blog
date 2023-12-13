import { PostContent } from "../../components/PostContent";
import { PostContentDescription } from "../../components/PostContentDescription";
import { PostInfoContainer } from "./styles";

export function PostInfo() {
    return (
        <PostInfoContainer>
            <PostContent />
            <PostContentDescription />
        </PostInfoContainer>
    )
}