import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;

        ::-webkit-scrollbar {
        width: 1rem;
        }

        ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme["base-border"]};
        border-radius: 50px;
        }

        ::-webkit-scrollbar-thumb {
        border-radius: 50px;
        background: #14589C;
        }

        ::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.blue};
        }
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.blue};
    }

    body {
        background-color: ${({ theme }) => theme["base-background"]};
        color: ${({ theme }) => theme["base-text"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font: 400 1rem Nunito, sans-serif;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`