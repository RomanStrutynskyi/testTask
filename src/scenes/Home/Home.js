import React, { Component } from "react";
import styled from "styled-components";
import { palette } from "styled-theme";
import { ifProp } from "styled-tools";
import { Template, Input, Button } from "../../components";
import { routes } from "../routes";

const Form = styled.form`
	display: inline-flex;
	max-width: 600px;
	width: 100%;
	flex-wrap: wrap;
	padding: 5vh 0;
`;

const StyledInput = styled(Input)`
	flex: 0 0 calc(60% - 30px);
	margin: 10px 15px;
`;
const StyledButton = styled(Button)`
	flex: 0 0 calc(40% - 30px);
	margin: 10px 15px;
`;
const Message = styled.div`
	padding: 10px 15px;
	border-radius: 3px;
	color: ${palette("light", 0)};
	height: 40px;
	max-width: 600px;
	width: 100%;
	background-color: ${ifProp(
		"isError",
		palette("error", 0),
		palette("success", 0)
	)};
`;
class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			showMessage: false,
			isError: false
		};
	}
	handleChange = e => {
		const value = e.target.value;

		this.setState({
			name: value
		});
	};

	handleSubmit = ev => {
		ev.preventDefault();
		let data = {
			name: this.state.name
		};

		fetch(`http://localhost:8081/api/user`, {
			method: "POST",
			body: JSON.stringify(data),
			headers: { "Content-Type": "application/json" }
		})
			.then(res => {
				if (!res.ok) {
					this.error();
				}
				return res;
			})
			.then(res => this.success())
			.catch(error => console.log(error));
	};
	success() {
		this.setState({ showMessage: true });
	}
	error() {
		this.setState({ showMessage: true, isError: true });
	}
	renderMessage() {
		const { isError } = this.state;

		setTimeout(() => {
			this.setState({ showMessage: false, isError: false });
		}, 3000);

		return (
			<Message isError={isError}> {isError ? "Error" : "Success"} </Message>
		);
	}
	render() {
		return (
			<Template prevPage={routes.third} nextPage={routes.second}>
				{this.state.showMessage ? this.renderMessage() : ""}
				<Form onSubmit={this.handleSubmit}>
					<StyledInput
						required
						name="name"
						value={this.state.name}
						onChange={this.handleChange}
					/>
					<StyledButton type="submit">Add user</StyledButton>
				</Form>
			</Template>
		);
	}
}

export default Home;
