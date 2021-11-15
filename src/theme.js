import { createGlobalStyle } from "styled-components"
export const darkTheme = {
	body: '#fff',
	text: '#000'
}
export const lightTheme = {
	body: '#fff',
	text: '#'
}

export const GlobalStyles = createGlobalStyle`

	body{
		background-color: ${props => props.theme.body}
	}
`