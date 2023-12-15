import { PostContentIcons, PostInfoContainer, PostInfoContent } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons/faCalendarDay";
import { faComment } from "@fortawesome/free-solid-svg-icons/faComment";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";

export function PostHeader() {

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

                <h2>teste de titulo</h2>

                <PostContentIcons>

                    <div>
                        <FontAwesomeIcon icon={faGithub} />
                        <span>MarcosDevPF</span>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faCalendarDay} />
                        <span>há 1 dia</span>
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