import { Navigate, createBrowserRouter } from "react-router-dom";
import { Page404 } from "../pages/Page404";

import {  PageSimpleFrom } from "../pages/PageSimpleFrom";
import App from "../App";
import { PageEmployees } from "../pages/PageEmployees";
import { PageStateForm } from "../pages/PageStateForm";

const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <Page404 />,
		element: <App />,
		children: [
			{
				path: "/simple-form",
				element: <PageSimpleFrom />,
			},
			{
				path: "/employees",
				element: <PageEmployees />,
			},
			{
				path: "state-form",
				element: <PageStateForm />,
			},
			{
				path: "/",
				element: <Navigate to="/simple-form" replace />,
			},
		],
	},
]);

export default router