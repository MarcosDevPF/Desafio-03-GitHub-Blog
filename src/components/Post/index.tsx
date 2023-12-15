import { PostContainer } from "./styles";

import { format, formatDistanceToNowStrict } from "date-fns";
import ptBr from "date-fns/locale/pt-BR"
import { InfoPost } from "../Posts";

interface PostProps {
  post: InfoPost
}

export function Post({ post }: PostProps) {

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
    <PostContainer to={`/post-infos/${post.number}`}>
      <div>
        <h1>{post.title}</h1>
        <time
          title={publishedDateFormatted}
          dateTime={post.created_at.toString()}
        >
          {diferenceDaysFormatted}
        </time>
      </div>

      <p>{post.body}</p>
    </PostContainer>
  );
}