import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    width:  100%;
    height: auto;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
      
   
    background: 
            linear-gradient(217deg, #6447b5, rgba(255,0,0,0) 70.71%),
            linear-gradient(127deg, #82E1FF, rgba(0,255,0,0) 70.71%),
            linear-gradient(336deg,  #6447b5, rgba(0,0,255,0) 70.71%);
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  }
`;
export default GlobalStyle;
