import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillPersonPlusFill } from "react-icons/bs";
import useAuth from "../../config/context/AuthContext";
import "./Header.css";

const Header = () => {
	const { user, logout, userData } = useAuth();
	console.log(userData);

	return (
		<header className="header position-sticky top-0" style={{ zIndex: 12 }}>
			<h1 className="header__brand">
				<NavLink to="/">BUZZ</NavLink>
			</h1>
			<div className="header__right">
				<div class="dropdown">
					<div
						className="headerIcon"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						<BsFillPersonPlusFill className="friendListIcon" />
					</div>
					<ul
						class="dropdown-menu"
						aria-labelledby="dropdownMenuButton1"
					>
						<li>
							<a class="dropdown-item" href="#">
								Action
							</a>
						</li>
						<li>
							<a class="dropdown-item" href="#">
								Another action
							</a>
						</li>
						<li>
							<a class="dropdown-item" href="#">
								Something else here
							</a>
						</li>
					</ul>
				</div>

				<div className="dropdown">
					<div
						className="header__right"
						id="dropdownMenuLink"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						<img src={user?.photoURL} alt="" />
						<p>{user?.displayName}</p>
					</div>
					<ul
						className="dropdown-menu"
						aria-labelledby="dropdownMenuLink"
					>
						<li>
							<NavLink to={"/profile"} className="dropdown-item">
								Profile
							</NavLink>
						</li>
						<li>
							<hr className="dropdown-divider" />
						</li>
						<li>
							<a
								className="dropdown-item"
								onClick={() => logout()}
							>
								Logout
							</a>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
