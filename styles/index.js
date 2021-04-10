import { createGlobalStyle } from 'styled-components'
import { addOpacityToColor } from './utils'

export const fonts = {
  base:
    'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
}
export const breakPoints = {
  mobile: '520px',
}
export const theme = {
  colors: {
    primary: 'var(--primary)',
    secundary: 'var(--secundary)',
    black: 'var(--black)',
    white: 'var(--white)',
  },
}
const backgroundColor = addOpacityToColor('#0099FF', 0.3)

export const GlobalStyle = createGlobalStyle`
:root{
  --black:#000;
  --white:#fff;
  --primary:#0099FF;
  --secundary:#1C5480;
  --background:#fdfdfd;
}

@media (prefers-color-scheme: dark) {
  :root {
  --black:#fff;
  --white:#333;
  --primary:#0099FF;
  --secundary:#1C5480;
  --background:#333;
  }
}

html,
body {
  
  background-image: 
    radial-gradient(${backgroundColor} 1px,  var(--background) 1px),
    radial-gradient(${backgroundColor} 1px, var(--background) 1px);
  background-position: 0 0, 25px 25px;
  background-size:50px 50px;
  padding: 0;
  margin: 0;
  font-family:${fonts.base};
  font-size:16px;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

`
