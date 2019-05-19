import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ifProp } from "styled-tools";
import { palette } from "styled-theme";
import Button from "./Button";

const Wrapper = styled.div`
	display: inline-flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: 100vh;
    height: 100%;
    width: 100%;
`;
const Content = styled.div`
	display: ${ifProp("visible", "block", "none")};
`;

const Navigation = styled.div`
	display: inline-flex;
	align-items: center;
	flex-wrap: wrap;
	max-width: 300px;
	width: 100%;
	height: 300px;
	background-color: ${palette("dark", 0)};
`;

const StyledButton = styled(Button)`
	flex: 0 0 calc(50% - 30px);
	margin: 10px 15px;
`;

const Template = ({ prevPage, nextPage, children, ...props }) => {
	const isChildren = children ? true : false;
	return (
		<Wrapper {...props}>
			<Content visible={isChildren}>{children}</Content>
			<Navigation>
				<StyledButton to={prevPage}>Prev</StyledButton>
				<StyledButton to={nextPage}>Next</StyledButton>
			</Navigation>
		</Wrapper>
	);
};

Template.propTypes = {
	prevPage: PropTypes.string.isRequired,
	nextPage: PropTypes.string.isRequired,
	children: PropTypes.node
};

export default Template;
