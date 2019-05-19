import { reversePalette } from 'styled-theme/composer'
import { darken } from "polished";

const theme = {};
theme.palette = {
	primary: ["#5EFF23", darken(.3, '#5EFF23')],
	light: ["#fff"],
	success: ["green"],
	error: ["red"],
	dark: ["#000"]
};
theme.fonts = {
	primary: "Arial, Helvetica, sans-serif"
};
theme.reversePalette = reversePalette(theme.palette);

export default theme;
