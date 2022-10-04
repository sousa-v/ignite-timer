import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding:0;
  box-sizing: border-box;
}

:focus{
  outline: 0;
  box-shadow: ${({ theme }) => theme['green-500']};
}

body {
  background: ${({ theme }) => theme['gray-900']};
  color: ${({ theme }) => theme['gray-300']};
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: ${({ theme }) => theme['gray-800']};
}

::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme['gray-500']};   
  border-radius: 20px;      
  border: 3px solid ${({ theme }) => theme['gray-600']};
}
`
