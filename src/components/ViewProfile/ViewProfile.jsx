import React from "react";
import "./ViewProfile.css";
import { HiUserAdd } from "react-icons/hi";
import { AiOutlineSelect } from "react-icons/ai";

export default function ViewProfile() {
	return (
		<>
			<div className="viewProfile">
				<div className="profile">
					<div className="profileRight">
						<div className="profileRightTop">
							<div className="profileCover">
								<img className="coverImage" src="" alt="" />
								<img className="userImage" src="" alt="" />
							</div>
						</div>
						<div className="forMargin">
							<div className="profileInfo1">
								<h4 className="profileInfoName1">Sarah Wood</h4>
								<span className="profileInfoDesc1">
									Sarah Wood is co-founder and COD of video ad
									tech company.
								</span>
							</div>
							<div className="viewProfileWrapper">
								<ul className="viewProfileList">
									<li className="viewProfileListItem">
										London
									</li>
									<li className="viewProfileListItem">
										England
									</li>
									<li className="viewProfileListItem">
										United Kingdom
									</li>
									<li className="viewProfileListItem">
										234 friends
									</li>
								</ul>
							</div>
							<div className="profileRightBottom1">
								<button className="addFriendButton">
									<HiUserAdd className="viewProfileIcon" />
									Add Friend
								</button>
								<button className="visitWebsiteButton">
									<AiOutlineSelect className="viewProfileIcon" />
									Visit Website
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
