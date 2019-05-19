import React, { Component } from "react";
import styled from "styled-components";
import { Template } from "../../components";
import { routes } from "../routes";

const List = styled.ul`
	list-style: none;
	width: 300px;
	padding: 25px 0;
`;
class Second extends Component {
	constructor(props) {
		super(props);

		this.state = {
			users: null
		};
	}
	componentDidMount() {
		fetch(`http://localhost:8081/api/users`)
			.then(res => res.json())
			.then(json => this.setState({ users: json }));
	}

	renderBody() {
		const { users } = this.state;
		if (users !== null) {
			return (
				<List>
					{users.map(({ _id: id, name }) => (
						<li key={id}>{name}</li>
					))}
				</List>
			);
		}
		return <h2>Loading ...</h2>;
	}
	render() {
		return (
			<Template prevPage={routes.home} nextPage={routes.third}>
				{this.renderBody()}
			</Template>
		);
	}
}

export default Second;
