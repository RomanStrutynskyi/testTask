import React, { Component } from "react";
import { Template } from "../../components";
import { routes } from "../routes";

class Home extends Component {
	render() {
		return (
			<Template prevPage={routes.third} nextPage={routes.second}>
				<h1>Home</h1>
			</Template>
		);
	}
}

export default Home;
