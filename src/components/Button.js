import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import {Link} from "react-router-dom";
import { font, palette } from "styled-theme";

const fontSize = ({ height }) => `${height / 40}rem`;

const styles = css`
	display: inline-flex;
	font-family: ${font("primary")};
	align-items: center;
	white-space: nowrap;
	font-size: ${fontSize};
	border: 1px solid currentColor;
	height: 2.5em;
	justify-content: center;
	text-decoration: none;
	cursor: pointer;
	appearance: none;
	padding: 0 1em;
	border-radius: 3px;
	box-sizing: border-box;
	transition: color 250ms ease-out, border-color 250ms ease-out;
	background-color: ${palette("dark", 0)};
	color: ${palette("primary", 0)};

	&:hover,
	&:focus,
	&:active {
		color: ${palette("primary", 0, true)};
	}

	&:focus {
		outline: none;
	}
`;

const StyledLink = styled(
	({ palette, height, theme, ...props }) => (
		<Link {...props} />
	)
)`
	${styles}
`;

const Anchor = styled.a`
	${styles}
`;
const StyledButton = styled.button`
	${styles}
`;

const Button = ({ type, ...props }) => {
	const { to, href } = props;
	if (to) {
		return <StyledLink {...props} />;
	}
	if (href) {
		return <Anchor {...props} />;
	}
	return <StyledButton {...props} type={type} />;
};

Button.propTypes = {
	palette: PropTypes.string,
	height: PropTypes.number,
	type: PropTypes.string,
	to: PropTypes.string,
	href: PropTypes.string
};

Button.defaultProps = {
	palette: "primary",
	type: "button",
	height: 40
};

export default Button;
