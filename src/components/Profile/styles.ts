import styled from "styled-components";

export const ProfileContainer = styled.section`
    width: 100%;
    max-width: 54rem;
    max-height: 13.25rem;
    margin: 0 auto;
    padding: 0 1.5rem;
    margin-top: -5rem;

`

export const ProfileContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem 2.5rem;
    border-radius: 10px;
    background: ${({theme}) => theme["base-profile"]};
    position: absolute;

    img {
        border-radius: 8px;
        width: 148px;
        height: 148px;
        gap: 2rem;
    }

    strong {
        color: ${({theme}) => theme["base-title"]};
        font: 700 1.5rem;
        line-height: 1.3;
    }
`