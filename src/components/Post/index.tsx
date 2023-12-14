import { useContext } from "react";
import { PostContent } from "./styles";
import { PostsContext } from "../../contexts/PostsContext";

import { format, formatDistanceToNow } from "date-fns";
import ptBr from "date-fns/locale/pt-BR"

export function Post() {
  const { posts } = useContext(PostsContext)

  const publishedDateFormatted = format(
    new Date(posts.created_at),
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBr, }
  );

  const diferenceDaysFormatted = formatDistanceToNow(new Date(posts.created_at), {
    locale: ptBr
  })

  return (
    <PostContent href="http://localhost:5173/post-info">
      <div>
        <h1>{posts.title}</h1>
        <time title={publishedDateFormatted}>{diferenceDaysFormatted}</time>
      </div>

      <p>{posts.body}</p>
    </PostContent>
  );
}