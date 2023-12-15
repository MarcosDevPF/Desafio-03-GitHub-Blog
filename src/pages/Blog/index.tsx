import { Posts } from "../../components/Posts";
import { Profile } from "../../components/Profile";
import { BlogContainer } from "./styles";

export function Blog() {

    return (
        <BlogContainer>
            <Profile />
            <Posts />
        </BlogContainer>
    )
}