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
    html, body {
        height: 100%;
        width: 100%;
    }
    body{
        font-family:-apple-system, 'BlinkMacSystemFont', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color:white;
        font-size: 12px;
    }
`;

export default globalStyles;
