import "./Rightbar.css";
import { AiOutlinePlus } from "react-icons/ai";
import userImg from "../../../static/images/user-image.jpeg";

export default function Rightbar() {
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
						<li className="rightbarContact">
							<div className="rightbarProfileImgContainer">
								<img
									className="rightbarProfileImg"
									src={userImg}
									alt=""
								/>
								<span className="rightbarContactName">XYZ</span>

								<button className="rightbarButton">
									<AiOutlinePlus className="rightbarIcon" />
									Friend
								</button>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}
