import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostContainer = styled(Link)`
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
        gap: 1rem;
    }

    h1 {
        width: 17rem;
        font-size: 20px;
        line-height: 1.6;
        color: ${({ theme }) => theme["base-title"]};

        overflow: hidden !important;
        text-overflow: ellipsis;

        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }

    time {
        white-space: nowrap;
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