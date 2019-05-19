import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { font } from "styled-theme";
import "normalize.css";
import theme from "./themes/default";
import Routes from "./scenes/routes";

const GlobalStyle = createGlobalStyle`
  body {
	font-family: ${font("primary")};
    
  }
`;

function App() {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyle />
				<Routes />
			</>
		</ThemeProvider>
	);
}

export default App;
