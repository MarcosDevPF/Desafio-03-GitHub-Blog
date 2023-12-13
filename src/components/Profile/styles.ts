import styled from "styled-components";

export const ProfileContainer = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between ;

    max-width: 54rem;
    margin: 0 auto;
    max-height: 13.25rem;
    padding: 0 1.5rem;
    margin-top: -7rem;
    gap: 2rem;


    padding: 2rem 2.5rem;
    border-radius: 10px;
    background: ${({ theme }) => theme["base-profile"]};
    position: relative;
    

    img {
        border-radius: 8px;
        width: 148px;
        height: 148px;
    }
`

export const ProfileContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const ProfileIcons = styled.div`

    width: 100%;
    display:flex;
    gap: 1.5rem;

    div {
        display: flex;
        gap: 0.5rem;
        align-items: center;

        svg {
            color: ${({ theme }) => theme["base-label"]};
        }

        span {
            color: ${({ theme }) => theme["base-label"]};
        }
    }
`