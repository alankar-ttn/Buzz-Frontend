import "./Rightbar.css";
import { AiOutlinePlus } from "react-icons/ai";
import userImg from "../../../static/images/user-image.jpeg";
import { useEffect, useState } from "react";
import axios from "axios";
import { auth } from "../../../config/Firebase/Firebase";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function Rightbar() {
	const [friends, setFriends] = useState([]);
	const [suggestion, setSuggestion] = useState([]);

	useEffect(() => {
		const getUsers = async () => {
			const token = await auth.currentUser.getIdToken();
			await axios
				.get("http://localhost:5000/api/auth/users", {
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
					<h4 className="rightbarTitle">Contacts</h4>
					<ul className="rightbarContactList">
						<li className="rightbarContact">
							<div className="rightbarProfileImgContainer">
								<img
									className="rightbarProfileImg"
									src={userImg}
									alt=""
								/>
								<span className="rightbarContactName">XYZ</span>
							</div>
						</li>
					</ul>
				</div>
				<div className="rightbarWrapper2">
					<h4 className="rightbarTitle">Suggestions</h4>
					<ul className="rightbarContactList">
						{suggestion.map((user) => (
							<Link to={`/${user._id}/user`}>
								<li className="rightbarContact my-3 me-5">
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
