import styled from "styled-components";

export const PostContentDescriptionContainer = styled.div`
    width: 54rem;
    padding: 2.5rem 2rem;

    pre {
        background: ${({ theme }) => theme["base-post"]};

        > div {
            background: none !important;
        }
    }

    a {
        color: ${({ theme }) => theme.blue};
        text-decoration: underline;
    }
`