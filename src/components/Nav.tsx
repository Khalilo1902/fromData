
import { NavLink } from "react-router-dom";

export const Nav = () => {
	return <nav>
		<ul className="flex gap-4 bg-slate-500 px-4 py-2 content">
			<li><NavLink to="/simple-form">Simple form</NavLink></li>
			<li><NavLink to="/info">Info</NavLink></li>
			<li><NavLink to="/about">About</NavLink></li>
		</ul>
	</nav>;
};