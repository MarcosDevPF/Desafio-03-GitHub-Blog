import { useParams } from "react-router-dom";
import { Posts } from "../../components/Posts";
import { Profile } from "../../components/Profile";
import { BlogContainer } from "./styles";

export function Blog() {
    const { slug } = useParams();

    return (
        <BlogContainer>
            <Profile
                slug={slug as string}
            />
            <Posts />
        </BlogContainer>
    )
}