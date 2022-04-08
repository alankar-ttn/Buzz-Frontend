import axios from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "../../config/context/AuthContext";
import Post from "./Post/Post";
import PostForm from "./PostForm/PostForm";

const Feeds = () => {
	const { posts, getPosts } = useAuth();

	useEffect(() => {
		getPosts();
	}, [posts]);

	return (
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
					{posts.map((post) => (
						<Post key={post._id} post={post} />
					))}
				</div>
			</div>
			<div style={{ flex: 1 }}></div>
		</div>
	);
};

export default Feeds;
