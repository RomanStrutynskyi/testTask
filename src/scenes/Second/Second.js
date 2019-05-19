import React, { Component } from "react";
import { Template } from "../../components";
import { routes } from "../routes";

class Second extends Component {
	render() {
		return (
			<Template prevPage={routes.hme} nextPage={routes.third}>
				<h1>Second</h1>
			</Template>
		);
	}
}

export default Second;
