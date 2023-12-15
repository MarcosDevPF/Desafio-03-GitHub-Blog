import { PostContentDescriptionContainer } from "./styles";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism"
import { InfoPost } from "../Posts";

interface PostContentDescriptionProps {
    postDescription: InfoPost
}

export function PostContentDescription({ postDescription }: PostContentDescriptionProps) {
    return (
        <PostContentDescriptionContainer>
            <ReactMarkdown
                children={postDescription.body}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        return !inline && match ? (
                            <SyntaxHighlighter
                                children={String(children).replace(/\n$/, "")}
                                style={dracula as any}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                            />
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    },
                }}
            />
        </PostContentDescriptionContainer>
    )
}