import React, { useEffect, useState } from "react";
import "./ViewProfile.css";
import { HiUserAdd } from "react-icons/hi";
import { AiOutlineSelect } from "react-icons/ai";
import axios from "axios";
import { useParams } from "react-router-dom";
import { auth } from "../../config/Firebase/Firebase";
import Header from "../Header/Header";
import cover from "../../static/images/cover-picture.jpeg";
import { GLOBAL_URL } from "../../config/global/contant";

export default function ViewProfile() {
	const [user, setUser] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const getUser = async () => {
			const token = await auth.currentUser.getIdToken();
			await axios
				.get(`${GLOBAL_URL}/api/auth/${id}/profile`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then((res) => {
					setUser(res.data);
					console.log(res.data);
				})
				.catch((err) => {
					console.log(err.response);
				});
		};
		getUser();
	}, []);
	return (
		<>
			<Header />
			<div className="viewProfile">
				<div className="profile">
					<div className="profileRight">
						<div className="profileRightTop">
							<div className="profileCover">
								<img
									className="coverImage"
									src={cover}
									alt=""
									style={{ height: "300px" }}
								/>
								<img
									className="userImage"
									src={user.profileImage}
									alt=""
									style={{ height: "120px", width: "120px" }}
								/>
							</div>
						</div>
						<div className="forMargin">
							<div className="profileInfo1">
								<h4 className="profileInfoName1">{`${user.firstName} ${user.lastName}`}</h4>
								<span className="profileInfoDesc1">
									{`${user.firstName} ${user.lastName} is a ${user.designation}`}
								</span>
							</div>
							<div className="profileRightBottom1">
								<button className="addFriendButton">
									<HiUserAdd className="viewProfileIcon" />
									Add Friend
								</button>
								{user.website !== "" && (
									<a href={user.website} target="_blank">
										<button className="visitWebsiteButton">
											<AiOutlineSelect className="viewProfileIcon" />
											Visit Website
										</button>
									</a>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
