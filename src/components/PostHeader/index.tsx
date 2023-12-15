import { PostContentIcons, PostInfoContainer, PostInfoContent } from "./styles";
import ptBr from "date-fns/locale/pt-BR"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons/faCalendarDay";
import { faComment } from "@fortawesome/free-solid-svg-icons/faComment";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { InfoPost } from "../Posts";
import { Spinner } from "../Profile/styles";
import { format, formatDistanceToNowStrict } from "date-fns";


export interface PostHeaderProps {
    postDetails: InfoPost
    isLoading: boolean
}

export function PostHeader({ postDetails, isLoading }: PostHeaderProps) {

    const publishedDateFormatted = format(
        new Date(),
        "d 'de' LLLL 'às' HH:mm",
        { locale: ptBr, }
    );

    const diferenceDaysFormatted = () => {
        if (postDetails.created_at) {
            return formatDistanceToNowStrict(
                new Date(postDetails.created_at),
                {
                    locale: ptBr,
                    addSuffix: true
                }
            );
        } else {
            return "loading...";
        }
    };

    return (
        <PostInfoContainer>
            {isLoading ? <Spinner /> : (
                <>
                    <PostInfoContent>
                        <nav>
                            <a href="/">
                                <FontAwesomeIcon icon={faChevronLeft} />
                                VOLTAR
                            </a>

                            <a href={postDetails.html_url} target="_blank">
                                VER NO GITHUB
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            </a>
                        </nav>

                        <h2>{postDetails.title}</h2>

                        <PostContentIcons>

                            <div>
                                <FontAwesomeIcon icon={faGithub} />
                                <span>{postDetails.user.login}</span>
                            </div>

                            <div>
                                <FontAwesomeIcon icon={faCalendarDay} />
                                <time
                                    title={publishedDateFormatted}
                                    dateTime={postDetails.created_at.toString()}
                                >
                                    {diferenceDaysFormatted()}
                                </time>
                            </div>

                            <div>
                                <FontAwesomeIcon icon={faComment} />
                                <span>{postDetails.comments} comentário</span>
                            </div>

                        </PostContentIcons>

                    </PostInfoContent>
                </>
            )}

        </PostInfoContainer>
    )
}