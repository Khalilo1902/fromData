import { Navigate, createBrowserRouter } from "react-router-dom";
import { Page404 } from "../pages/Page404";
import { PageAbout } from "../pages/PageAbout";
import {  PageSimpleFrom } from "../pages/PageSimpleFrom";
import App from "../App";
import { PageEmployees } from "../pages/PageEmployees";

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
				path: "about",
				element: <PageAbout />,
			},
			{
				path: "/",
				element: <Navigate to="/simple-form" replace />,
			},
		],
	},
]);

export default router