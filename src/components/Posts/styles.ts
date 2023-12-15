import styled from "styled-components";

export const PostContainer = styled.div`
    margin-top: 3rem;
    margin-bottom: 9rem;
    max-width: 54rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 2.3125rem;
`

export const NoIssues = styled.span`
    margin-top: 4rem;
    margin-bottom: 4rem;
    width: 54rem;
    height: 26.50rem;
    border-radius: 10px;
    padding: 10rem;

    font-size: 38px;
    line-height: 1.3;



    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
    gap: 2rem;
    background: ${({ theme }) => theme["base-post"]};
    outline: 4px solid ${({ theme }) => theme["base-border"]};

    svg {
        width: 150px;
        height: 150px;
    }
`