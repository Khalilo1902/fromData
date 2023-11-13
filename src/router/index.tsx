import { Navigate, createBrowserRouter } from "react-router-dom";
import { Page404 } from "../pages/Page404";
import { PageAbout } from "../pages/PageAbout";
import {  PageSimpleFrom } from "../pages/PageSimpleFrom";
import App from "../App";
import { PageInfo } from "../pages/PageInfo";

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
				path: "info",
				element: <PageInfo />,
			},
			{
				path: "about",
				element: <PageAbout />,
			},
			{
				path: "/",
				element: <Navigate to="/welcome" replace />,
			},
		],
	},
]);

export default router