import React, { Component } from "react";
import { Template } from "../../components";
import { routes } from "../routes";

class Third extends Component {
	render() {
		return (
			<Template prevPage={routes.second} nextPage={routes.home}>
				<h1>third</h1>
			</Template>
		);
	}
}

export default Third;
