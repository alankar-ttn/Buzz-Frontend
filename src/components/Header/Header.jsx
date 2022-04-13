import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../config/context/AuthContext";
import "./Header.css";

const Header = () => {
	const { user, logout, userData } = useAuth();

	return (
		<header className="header position-sticky top-0" style={{zIndex: 12}}>
			<h1 className="header__brand">
				<NavLink to="/">BUZZ</NavLink>
			</h1>
			<div className="dropdown">
				<div className="header__right" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
					<img src={userData.profileImage} alt="" />
					<p>{user.displayName}</p>
				</div>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><NavLink to={"/profile"} className="dropdown-item">Profile</NavLink></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" onClick={() => logout()}>Logout</a></li>
                </ul>
			</div>
		</header>
	);
};

export default Header;
