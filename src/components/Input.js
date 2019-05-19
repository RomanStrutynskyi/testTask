import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { font, palette } from "styled-theme";

const fontSize = ({ height }) => `${height / 35.5555555556}rem`;

const styles = css`
	font-family: ${font("primary")};
	display: block;
	width: 100%;
	margin: 0;
	box-sizing: border-box;
	font-size: ${fontSize};
	padding: 0 10px;
	height: 2.22em;
	color: ${palette("dark", 0)};
	background-color: ${palette("white", 0)};
	border: 1px solid ${palette("dark", 0)};
	border-radius: 2px;
	transition: border-color 250ms ease-out;
    outline:none;
    &:focus{
	    border: 1px solid ${palette("primary", 0)};
    }
`;

const Input = styled(({ ...props }) => <input {...props} />)`
	${styles}
`;

Input.propTypes = {
	type: PropTypes.string,
	height: PropTypes.number
};

Input.defaultProps = {
	type: "text",
	height: 40
};

export default Input;
