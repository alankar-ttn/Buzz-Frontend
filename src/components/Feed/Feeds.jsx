import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../config/context/AuthContext";
import Header from "../Header/Header";
import Post from "./Post/Post";
import PostForm from "./PostForm/PostForm";
import Sidebar from "./Sidebar/Sidebar";
import Rightbar from "./Rightbar/Rightbar";

const Feeds = () => {
	const { posts, getPosts } = useAuth();

	useEffect(() => {
		getPosts();
	}, [posts]);

	return (
		<>
			<Header />
			<div
				style={{
					display: "flex",
					gap: "20px",
					justifyContent: "space-between",
					alignItems: "flex-start",
				}}
			>
				<div style={{ flex: 1, marginLeft: "10px" }}>
					<Sidebar />
				</div>
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
						{posts.map((post) => (
							<Post key={post._id} post={post} />
						))}
					</div>
				</div>

				<div style={{ flex: 1, marginRight: "10px" }}>
					<Rightbar />
				</div>
			</div>
		</>
	);
};

export default Feeds;
