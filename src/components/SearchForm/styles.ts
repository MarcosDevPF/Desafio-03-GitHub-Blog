import styled from "styled-components";

export const SearchFormContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 12px;

    width: 54rem;
    /* margin: 0 auto; */
    margin-top: 4.5rem;

    > div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h3 {
        font-size: 18px;
        line-height: 1.6;
        color: ${({ theme }) => theme["base-subtitle"]};
    }

    span {
        font-size: 14px;
        line-height: 1.6;
        color: ${({ theme }) => theme["base-span"]};
    }

    input {
        width: 100%;
        padding: 1rem;
        border: 0;
        background: ${({ theme }) => theme["base-input"]};
        color: ${({ theme }) => theme["base-label"]};
        outline: 1px solid ${({ theme }) => theme["base-border"]};
        border-radius: 6px;
        height: 50px;
    }
`