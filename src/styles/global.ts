import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --red: #E52E4D;
        --green: #33CC95;
        --blue: #5429CC;
        --blue-light: #6933FF;

        --shape: #FFFFFF;
        
        --title: #363F5F;
        --text: #969CB2;
        --background: #F0F2F5;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media(max-width: 1080px){
            font-size: 93.75%;
        }
        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
    }

    button {
        cursor: pointer;
    }
    disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay {
        background: rgba(0,0,0,.5);
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .react-modal-content{
        position: relative;
        background: var(--background);
        padding: 3rem;
        width: 100%;
        max-width: 576px;
    }
    .react-modal-close {
        position: absolute;
        right: 5px;
        top: 5px;

        display: flex;
        border: 0;
        background: transparent;

        transition: .2s;
        &:hover{
            filter: brightness(0.8);
        }
    }
`;
