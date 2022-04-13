import "./Rightbar.css";
import { AiOutlinePlus } from "react-icons/ai";
import userImg from "../../../static/images/user-image.jpeg";
import { useEffect, useState } from "react";
import axios from "axios";
import { auth } from "../../../config/Firebase/Firebase";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { GLOBAL_URL } from "../../../config/global/contant";
import useAuth from "../../../config/context/AuthContext";

export default function Rightbar() {
	const [friends, setFriends] = useState([]);
	const [suggestion, setSuggestion] = useState([]);
	const {userData} = useAuth()

	useEffect(() => {
		const getUsers = async () => {
			const token = await auth.currentUser.getIdToken();
			await axios
				.get(`${GLOBAL_URL}/api/auth/users`, {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then((res) => setSuggestion(res.data))
				.catch((err) => toast.error("Oops! Something went wrong!"));
		};
		getUsers();
	}, []);

	return (
		<>
			<div className="rightbar">
				<div className="rightbarWrapper">
					<h4 className="rightbarTitle">Friends</h4>
					<ul className="rightbarContactList" style={{paddingLeft: 0}}>
					{suggestion.filter(user => userData.friends.includes(user._id)).map((user) => (
							<Link to={`/${user._id}/user`}>
								<li className="rightbarContact my-3 me-5 p-3">
									<div className="rightbarProfileImgContainer">
										<div>
											<img
												className="rightbarProfileImg"
												src={user.profileImage}
												alt=""
											/>
											<span className="rightbarContactName">{`${user.firstName} ${user.lastName}`}</span>
										</div>
									</div>
								</li>
							</Link>
						))}
					</ul>
				</div>
				<div className="rightbarWrapper2">
					<h4 className="rightbarTitle">Suggestions</h4>
					<ul className="rightbarContactList" style={{paddingLeft: 0}}>
						{suggestion.filter(user => !userData.friends.includes(user._id)).map((user) => (
							<Link to={`/${user._id}/user`}>
								<li className="rightbarContact my-3 me-5 p-3">
									<div className="rightbarProfileImgContainer">
										<div>
											<img
												className="rightbarProfileImg"
												src={user.profileImage}
												alt=""
											/>
											<span className="rightbarContactName">{`${user.firstName} ${user.lastName}`}</span>
										</div>

										<button className="rightbarButton float-end">
											<AiOutlinePlus className="rightbarIcon" />
											Friend
										</button>
									</div>
								</li>
							</Link>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}
