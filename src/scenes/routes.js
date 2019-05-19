import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Home/Home";
import Second from "./Second/Second";
import Third from "./Third/Third";
import NoMatch from "./NoMatch/NoMatch";

export const routes = {
	home: "/",
	second: "/second",
	third: "/third"
};

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path={routes.home} exact component={Home} />
				<Route path={routes.second} component={Second} />
				<Route path={routes.third} component={Third} />
				<Route component={NoMatch} />
			</Switch>
		</BrowserRouter>
	);
}
