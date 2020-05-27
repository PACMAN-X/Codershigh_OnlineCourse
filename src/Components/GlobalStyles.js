import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import font from '../Assets/Fonts/Fonts.css';

const globalStyles = createGlobalStyle`
    ${font};
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }

    // div.is-modal {
    //     overflow: hidden;
    //     position:   fixed;
    // }
    
    @media (max-width: 1024px) {
        html, body {
            margin: auto;
            width: 100%;
            height: 100%;
            min-width: 375px;
        }
    }

    @media (min-width: 1024px) {
        html, body {
            width: 100%;
            height: 100%;
            margin: auto;
        }
    }
    body{
        font-family: "SF Pro KR","SF Pro Text","SF Pro Icons","Apple Gothic","HY Gulim","MalgunGothic","HY Dotum","Lexi Gulim","Helvetica Neue","Helvetica","Arial",sans-serif;
        color: white;
        font-size: 12px;
    }
    
`;

export default globalStyles;
