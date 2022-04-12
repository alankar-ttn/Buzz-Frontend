import "./Sidebar.css";
import cover from "../../../static/images/cover-picture.jpeg";
import { FaHashtag, FaRegCalendar } from "react-icons/fa";
import { BsPeopleFill, BsCodeSlash } from "react-icons/bs";
import { AiOutlineLeftCircle, AiOutlineSelect } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import useAuth from "../../../config/context/AuthContext";

export default function Sidebar() {
	const { user } = useAuth();

	return (
		<>
			<div className="sidebar">
				<div className="profile">
					<div className="profileRight">
						<div className="profileRightTop">
							<div className="profileCover">
								<img
									classname="coverImage"
									src={cover}
									alt=""
								/>
								<img
									classname="userImage"
									src={user.photoURL}
									alt=""
								/>
							</div>
							<div className="profileInfo">
								<h4 className="profileInfoName">XYZ</h4>
								<span className="profileInfoDesc">
									Newly Recruit at TTN
								</span>
							</div>
						</div>
						<div className="profileRightBottom">
                            <div className="postViews">
                                <h6 className="postNumber">234</h6>
                                <span className="postText">Posts Views</span>
                            </div>
                            <div className="vl"></div>
                            <div className="post">
                                <h6 className="postNumber">16</h6>
                                <span className="postText">Post</span>
                            </div>
                        </div>
					</div>
				</div>
				<div className="sidebarWrapper">
					<h5 className="title">Recents</h5>
					<ul className="sidebarList">
						<li className="sidebarListItem">
							<FaHashtag className="sidebarIcon" />
							<span className="sidebarListItemText">
								#javascript
							</span>
						</li>
						<li className="sidebarListItem">
							<FaRegCalendar className="sidebarIcon" />
							<span className="sidebarListItemText">
								Mobile Trends Conference 2001
							</span>
						</li>
						<li className="sidebarListItem">
							<BsPeopleFill className="sidebarIcon" />
							<span className="sidebarListItemText">
								Freelance Developers
							</span>
						</li>
					</ul>
					<button className="sidebarButton">
						<IoIosArrowDown className="sidebarIcon1" />
						Show more
					</button>
					<hr />

					<h5 className="title">Groups</h5>
					<ul className="sidebarList">
						<li className="sidebarListItem">
							<FaHashtag className="sidebarIcon" />
							<span className="sidebarListItemText">
								#javascript
							</span>
						</li>
						<li className="sidebarListItem">
							<FaRegCalendar className="sidebarIcon" />
							<span className="sidebarListItemText">
								Mobile Trends Conference 2001
							</span>
						</li>
						<li className="sidebarListItem">
							<BsPeopleFill className="sidebarIcon" />
							<span className="sidebarListItemText">
								Freelance Developers
							</span>
						</li>
					</ul>
					<button className="sidebarButton">
						<IoIosArrowDown className="sidebarIcon1" />
						Show more
					</button>
					<hr />

					<h5 className="title">Subscription</h5>
					<ul className="sidebarList">
						<li className="sidebarListItem">
							<AiOutlineLeftCircle className="sidebarIcon" />
							<span className="sidebarListItemText">
								Programming with Mosh
							</span>
						</li>
						<li className="sidebarListItem">
							<AiOutlineSelect className="sidebarIcon" />
							<span className="sidebarListItemText">
								E-learning Bridge
							</span>
						</li>
						<li className="sidebarListItem">
							<BsCodeSlash className="sidebarIcon" />
							<span className="sidebarListItemText">
								Clever Programmer
							</span>
						</li>
					</ul>
					<button className="sidebarButton">
						<IoIosArrowDown className="sidebarIcon1" />
						Show more
					</button>
				</div>
			</div>
		</>
	);
}
