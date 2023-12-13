import styled from "styled-components";

export const PostContainer = styled.div`
    margin: 0 auto;
    margin-top: 3rem;
    margin-bottom: 9rem;
    max-width: 54rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 2.3125rem;
`

export const PostContent = styled.div`
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

    span {
        font-size: 14px;
        line-height: 1.6;
        color: ${({ theme }) => theme["base-span"]};
    }

    p {
        line-height: 1.6;
        color: ${({ theme }) => theme["base-text"]};
    }
`