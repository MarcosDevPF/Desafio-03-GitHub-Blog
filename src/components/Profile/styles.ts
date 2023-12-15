import styled from "styled-components";

export const ProfileContainer = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between ;

    width: 54rem;
    padding: 0 1.5rem;
    margin-top: -7rem;
    gap: 2rem;


    padding: 2rem 2.5rem;
    border-radius: 10px;
    background: ${({ theme }) => theme["base-profile"]};

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
                transition: 0.4s;
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

export const Spinner = styled.span`
  color: #ffffff;
  font-size: 45px;
  text-indent: -9999em;
  overflow: hidden;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  transform: translateZ(0);
  animation: mltShdSpin 1.7s infinite ease, round 1.7s infinite ease;


@keyframes mltShdSpin {
  0% {
    box-shadow: 0 -0.83em 0 -0.4em,
    0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
    0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  5%,
  95% {
    box-shadow: 0 -0.83em 0 -0.4em, 
    0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 
    0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  10%,
  59% {
    box-shadow: 0 -0.83em 0 -0.4em, 
    -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, 
    -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
  }
  20% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
     -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, 
     -0.749em -0.34em 0 -0.477em;
  }
  38% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
     -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, 
     -0.82em -0.09em 0 -0.477em;
  }
  100% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 
    0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
}

@keyframes round {
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
}
 
`