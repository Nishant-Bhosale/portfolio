import React from "react";

const NavLink = (props) => {
	return (
		<a href={props.link} onClick={props.hide}>
			{props.children}
		</a>
	);
};

export default NavLink;
