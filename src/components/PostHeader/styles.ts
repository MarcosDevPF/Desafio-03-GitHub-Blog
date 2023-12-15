import styled from "styled-components";

export const PostInfoContainer = styled.div`
    display: flex;
    align-items: center;

    width: 54rem;
    height: 10.5rem;
    padding: 0 1.5rem;
    margin-top: -5.6rem;
    gap: 2rem;


    padding: 2rem;
    border-radius: 10px;
    background: ${({ theme }) => theme["base-profile"]};

    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const PostInfoContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    nav {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.25rem;

        a {
            font-size: 12px;
            line-height: 1.6;
            display: flex;
            align-items: center;
            color: ${({ theme }) => theme.blue};
            border-bottom: 2px solid transparent;
            gap: 0.5rem;

            &:hover {
                border-bottom: 2px solid ${({ theme }) => theme.blue};
                transition: 0.4s;
            }
        }
    }

    h2 {
        font-size: 24px;
        line-height: 1.3;
        color: ${({ theme }) => theme["base-title"]};
    }
`

export const PostContentIcons = styled.div`
    width: 100%;
    display:flex;
    gap: 1.5rem;
    margin-top: 1rem;

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

        time {
            color: ${({ theme }) => theme["base-label"]};
        }
    }
`