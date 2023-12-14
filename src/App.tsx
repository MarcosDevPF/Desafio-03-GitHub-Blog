import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Routers } from "./Routers";
import { BrowserRouter } from "react-router-dom";
import { PostsProvider } from "./contexts/PostsContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <PostsProvider>
          <Routers />
        </PostsProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

