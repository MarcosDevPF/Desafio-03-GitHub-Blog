import { PostContainer } from "./styles";

import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR"
import { InfoPost } from "../Posts";

interface PostProps {
  post: InfoPost
}

export function Post({ post }: PostProps) {

  const publishedDateFormatted = format(
    new Date(post.created_at),
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBr, }
  );

  const diferenceDaysFormatted = formatDistanceToNow(new Date(post.created_at), {
    locale: ptBr
  })

  return (
    <PostContainer to={`/post-infos/${post.number}`}>
      <div>
        <h1>{post.title}</h1>
        <time title={publishedDateFormatted}>
          {diferenceDaysFormatted}
        </time>
      </div>

      <p>{post.body}</p>
    </PostContainer>
  );
}