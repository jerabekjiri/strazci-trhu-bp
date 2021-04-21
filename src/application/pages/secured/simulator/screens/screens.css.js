import { css } from 'lit-element';
import { registerStyleModule } from '../../../../../modules/utils/registerStyleModule.fnc';

registerStyleModule('screens-simulator', css`
    .prolog {
        width: 500px;
        margin: auto;
    }

    @keyframes slide-in {
        0%  { opacity: 0; transform: translateY(300px) }
        100% { opacity: 1; transform: translateY(0px)}
    }
    @keyframes slide-out {
        0% { opacity: 1; transform: translateY(0px); }
        100% { opacity: 0; transform: translateY(-300px); }
    }
    @keyframes fade-in {
        from { opacity:0 }
        to { opacity:1 }
    }

    .box {
        padding: 24px;
        color: white;
        text-align: center;
    } 
    .message {
        margin-bottom: 15px;
        animation: 1s fade-in;
        padding: 15px;
        font-size: 20px;
    }

    .slide-in {
        animation: slide-in 0.5s forwards;
        -webkit-animation: slide-in 0.5s forwards;
    }

    .slide-out {
        animation: slide-out 0.5s forwards;
        -webkit-animation: slide-out 0.5s forwards;
    }

    .hidden {
        display: none;
    }

    .prolog .actions,
    .default__item {
        margin-top: 15px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        animation: 1s fade-in;
    }

    .story .default__item {
        height: 48px;
    }
    
    .prolog .item {
        display: flex;
        height: 48px;
        width: 200px;
    }

    .story {
        color: var(--main);
    }

    .phone-simulator {
        width: 150px;
    }

    .story .actions {
        animation: 1s fade-in;
    }

    .story .box {
        min-height: 50px;
    }

    .loader-screen .messages { 
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: 500px;
        overflow: hidden;
    }

    .loader-screen .message {
        width: 300px;
        margin: auto;
        animation: fadein 4000ms;
    }

    @keyframes slide-in {
        0%  { opacity: 0; transform: translateY(300px) }
        100% { opacity: 1; transform: translateY(0px)}
    }

    @keyframes slide-out {
        0% { opacity: 1; transform: translateY(0px); }
        100% { opacity: 0; transform: translateY(-300px); }
    }
    .loader-screen .box {
        padding: 24px;
        color: white;
        text-align: center;
    }

    .loader-screen .slide-in {
        animation: slide-in 0.5s forwards;
        -webkit-animation: slide-in 0.5s forwards;
    }

    .loader-screen .slide-out {
        animation: slide-out 0.5s forwards;
        -webkit-animation: slide-out 0.5s forwards;
    }

    .loader-screen .hidden {
        splay: none;
    }

    .summary-screen  h1 { 
        text-align: center;
    }

    .summary-screen {
        width: 800px;
        margin: auto;
    }

    .summary-screen ag-button {
        display: flex;
        justify-content: center;    
    }

    .summary-screen p {
        font-size: 20px;
        padding: 0px 0px 10px; 
    }

    .story-screen__box__top {
        color: var(--main);
        text-align: left;
    }

    summary-screen__box__error-screen {

    }

    .sentence-error {
        color: var(--error);
    }

    .summary-screen__box__error-screen__title {
        color: var(--error);
    }

    .summary-screen__box__error-screen__buttons {
        display: flex;
        justify-content: space-between;
        margin-top: 24px;
    }
`);