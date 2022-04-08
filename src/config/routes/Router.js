import React from "react";
import { Route, Routes } from "react-router-dom";
import Feeds from "../../components/Feed/Feeds";
import Login from "../../components/Login/Login";
import PrivateRoute from "./PrivateRoute";

const Router = () => {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/" element={<PrivateRoute />}>
				<Route path="/" element={<Feeds />} />
			</Route>
		</Routes>
	);
};

export default Router;
