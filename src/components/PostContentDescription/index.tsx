import { PostContentDescriptionContainer } from "./styles";

import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism"

const description = `
**Programming languages all have built-in data structures, but these often differ from one language to another**.This article attempts to list the built -in data structures available in JavaScript and what properties they have.These can be used to build other data structures.Wherever possible, comparisons with other languages are drawn.

&nbsp;

[Dynamic typing](https://www.educative.io/answers/what-is-dynamic-typing)

JavaScript is a loosely typed and dynamic language.Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned(and re - assigned) values of all types:

&nbsp;

~~~jsx
let foo = 42;   // foo is now a number
foo = ‘bar’;    // foo is now a string 
foo = true;     // foo is now a boolean
~~~

`

export function PostContentDescription() {
    return (
        <PostContentDescriptionContainer>
            <ReactMarkdown
                children={description}
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