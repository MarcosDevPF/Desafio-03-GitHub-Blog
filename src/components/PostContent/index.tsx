import { PostContentIcons, PostInfoContainer, PostInfoContent } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons/faCalendarDay";
import { faComment } from "@fortawesome/free-solid-svg-icons/faComment";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { InfoPost } from "../Posts";

interface PostContentProps {
    postContent: InfoPost
}

export function PostContent({ postContent }: PostContentProps) {

    return (
        <PostInfoContainer>
            <PostInfoContent>
                <nav>
                    <a href="/">
                        <FontAwesomeIcon icon={faChevronLeft} />
                        VOLTAR
                    </a>

                    <a href="/MarcosDevPF/Desafio-03-GitHub-Blog/issues/1">
                        VER NO GITHUB
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </nav>

                <h2>{postContent.title}</h2>

                <PostContentIcons>

                    <div>
                        <FontAwesomeIcon icon={faGithub} />
                        <span>{postContent.user.login}</span>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faCalendarDay} />
                        <span>{postContent.created_at}</span>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faComment} />
                        <span>{postContent.comments} comentário</span>
                    </div>

                </PostContentIcons>

            </PostInfoContent>
        </PostInfoContainer>
    )
}