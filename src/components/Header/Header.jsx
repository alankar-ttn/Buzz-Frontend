import React from "react";
import useAuth from "../../config/context/AuthContext";
import "./Header.css";

const Header = () => {
	const { user, logout } = useAuth();

	return (
		<header className="header">
			<h1 className="header__brand">
				<a href="/">BUZZ</a>
			</h1>
			<div className="dropdown">
				<div className="header__right" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
					<img src={user.photoURL} alt="" />
					<p>{user.displayName}</p>
				</div>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" onClick={() => logout()}>Logout</a></li>
                </ul>
			</div>
		</header>
	);
};

export default Header;
