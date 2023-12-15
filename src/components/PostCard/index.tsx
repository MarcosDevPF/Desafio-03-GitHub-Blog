import { DescriptionInMarkdown, PostContainer } from "./styles";

import { format, formatDistanceToNowStrict } from "date-fns";
import ptBr from "date-fns/locale/pt-BR"
import { InfoPost } from "../Posts";
import ReactMarkdown from "react-markdown";

interface PostCardProps {
  post: InfoPost
}

export function PostCard({ post }: PostCardProps) {

  const publishedDateFormatted = format(
    new Date(),
    "d 'de' LLLL 'às' HH:mm",
    { locale: ptBr, }
  );

  const diferenceDaysFormatted = formatDistanceToNowStrict(
    new Date(post.created_at),
    {
      locale: ptBr,
      addSuffix: true
    }
  )

  return (
    <PostContainer to={`/post-info/${post.number}`}>
      <div>
        <h1>{post.title}</h1>
        <time
          title={publishedDateFormatted}
          dateTime={post.created_at.toString()}
        >
          {diferenceDaysFormatted}
        </time>
      </div>

      <DescriptionInMarkdown>
        <ReactMarkdown>
          {post.body}
        </ReactMarkdown>
      </DescriptionInMarkdown>
    </PostContainer>
  );
}