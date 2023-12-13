import styled from "styled-components";

export const ProfileContainer = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between ;

    max-width: 54rem;
    padding: 0 1.5rem;
    margin-top: -7rem;
    gap: 2rem;


    padding: 2rem 2.5rem;
    border-radius: 10px;
    background: ${({ theme }) => theme["base-profile"]};
    position: relative;

    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    img {
        border-radius: 8px;
        width: 148px;
        height: 148px;
    }

    main {
        p {
            font-size: 16px;
            line-height: 1.6;
            color: ${({ theme }) => theme["base-text"]};
        }
    }
`

export const ProfileContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2 {
            font-weight: 700;
            font-size: 24px;
            color: ${({ theme }) => theme["base-title"]};
            line-height: 1.3;
        }

        a {
            border-bottom: 2px solid transparent;
            font-weight: 700;
            font-size: 12px;
            line-height: 1.6;

            color: ${({ theme }) => theme.blue};

            &:hover {
                border-bottom: 2px solid ${({ theme }) => theme.blue};
                transition: 0.3s;
            }

            svg {
                margin-left: 0.5rem;
                size: 12px;
            }
        }
    }
`

export const ProfileIcons = styled.footer`

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
    }
`