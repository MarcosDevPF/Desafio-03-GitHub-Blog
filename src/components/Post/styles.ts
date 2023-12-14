import styled from "styled-components";

export const PostContent = styled.a`
    display: flex;
    flex-direction: column;
    max-width: 26rem;
    height: 16.25rem;
    background: ${({ theme }) => theme["base-post"]};
    padding: 2rem;
    border-radius: 10px;
    cursor: pointer;
    outline: 2px solid transparent;


    &:hover {
        outline: 2px solid ${({ theme }) => theme["base-label"]};
        transition: 0.4s;
    }

    div {
        display: flex;
        align-items: baseline;
        margin-bottom: 1.25rem;
    }

    h1 {
        width: 283px;
        font-size: 20px;
        line-height: 1.6;
        color: ${({ theme }) => theme["base-title"]};
    }

    time {
        font-size: 14px;
        line-height: 1.6;
        color: ${({ theme }) => theme["base-span"]};
    }

    p {
        line-height: 1.6;
        color: ${({ theme }) => theme["base-text"]};

        overflow: hidden !important;
        text-overflow: ellipsis;

        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
    }
`