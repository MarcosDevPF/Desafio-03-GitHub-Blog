import { PostContentIcons, PostInfoContainer, PostInfoContent } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons/faCalendarDay";
import { faComment } from "@fortawesome/free-solid-svg-icons/faComment";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";

export function PostContent() {
    return (
        <PostInfoContainer>
            <PostInfoContent>
                <nav>
                    <a href="http://localhost:5173/">
                        <FontAwesomeIcon icon={faChevronLeft} />
                        VOLTAR
                    </a>

                    <a href="https://github.com/MarcosDevPF/Desafio-03-GitHub-Blog/issues/1#issue-2039600953">
                        VER NO GITHUB
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </nav>

                <h2>JavaScript data types and data structures</h2>

                <PostContentIcons>

                    <div>
                        <FontAwesomeIcon icon={faGithub} />
                        <span>MarcosDevPF</span>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faCalendarDay} />
                        <span>Há 1 dia</span>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faComment} />
                        <span>1 comentário</span>
                    </div>

                </PostContentIcons>

            </PostInfoContent>
        </PostInfoContainer>
    )
}