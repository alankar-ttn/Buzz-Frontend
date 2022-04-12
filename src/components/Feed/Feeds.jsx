import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../config/context/AuthContext";
import Header from "../Header/Header";
import Post from "./Post/Post";
import PostForm from "./PostForm/PostForm";

const Feeds = () => {
	const { posts, getPosts, userData } = useAuth();
	const [userType, setUserType] = useState("Admin");
	const [checked, setChecked] = useState(false);

	useEffect(() => {
		getPosts();
	}, [posts]);

	useEffect(() => {
		setUserType(() => (checked ? "Admin" : "User"));
	}, [checked]);

	return (
		<div>
			<Header />
			<div
				style={{
					display: "flex",
					justifyContent: "sapce-between",
					alignItems: "center",
				}}
			>
				<div style={{ flex: 1 }}></div>
				<div style={{ flex: 2 }}>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							width: "100%",
							height: "100%",
							backgroundColor: "#f5f5f5",
						}}
					>
						<PostForm />
						{userData?.isAdmin && (
							<div className="d-flex justify-content-end w-100">
								<div class="form-check form-switch position-relative">
									<input
										class="form-check-input"
										type="checkbox"
										role="switch"
										id="moderatorSwitch"
										style={{
											height: "30px",
											width: "100px",
										}}
										checked={checked}
										onChange={() => setChecked(!checked)}
									/>
									<label
										onClick={() => setChecked(!checked)}
										style={{
											position: "absolute",
											top: "5px",
											left: checked ? "10px" : "",
											right: checked ? "" : "10px",
											zIndex: "1",
											transition: "all 0.3s ease-in-out",
											fontWeight: "bold",
											color: checked ? "#fff" : "#000",
										}}
										className="form-check-label position-absolute"
									>
										{userType}
									</label>
								</div>
							</div>
						)}
						{userType === "Admin"
							? posts
									.filter((post) => post.reported === true)
									.map((p) => <Post key={p._id} post={p} />)
							: posts.map((post) => (
									<Post key={post._id} post={post} />
							  ))}
					</div>
				</div>
				<div style={{ flex: 1 }}></div>
			</div>
		</div>
	);
};

export default Feeds;
