import React, { useEffect, useState } from "react";
import "./Post.css";
import { FaEllipsisH, FaThumbsUp, FaHeartBroken, FaFlag } from "react-icons/fa";
import axios from "axios";
import useAuth from "../../../config/context/AuthContext";

const Post = ({ post }) => {

	const [date, setDate] = useState("")

	useEffect(() => {
		if (post.dateCreated) {
			const date = new Date(post.dateCreated);
			const options = {
				weekday: "long",
				year: "numeric",
				month: "long",
				day: "numeric",
				hour: "numeric",
				minute: "numeric",
				second: "numeric"
			};
			setDate(date.toLocaleDateString("en-US", options));
		}
	}, [])

	const {user} = useAuth()

	return (
		<div className="post__container">
			<div className="post__header">
				<div className="post__headerLeft">
					<div className="post__headerImage">
						<img src={post.user.profileImage} alt="porfile" />
					</div>
					<div className="post__headerProfileDetails">
						<p className="post__headerProfileName">{`${post.user.firstName} ${post.user.lastName}`}</p>
						<p className="post__headerDate">{date}</p>
					</div>
				</div>
				<div className="post__headerRight">
					<div className="post__headerOptions">
						<FaEllipsisH color="#5E5E5E" size="1rem" />
					</div>
				</div>
			</div>
			<div className="post__description">
				<p>{post.caption}</p>
				{post.images.length > 0 && (
					<div
						id={`image${post._id}`}
						className="carousel carousel-dark slide"
						data-bs-ride="carousel"
					>
						<div className="carousel-inner">
							{post.images.map((image, index) => (
								<div
									className={`carousel-item ${index === 0 ? "active": ""}`}
									key={index}
								>
									<img
										src={image}
										className="d-block w-100"
										alt="image"
									/>
								</div>
							))}
						</div>
						<button
							className="carousel-control-prev"
							type="button"
							data-bs-target={`#image${post._id}`}
							data-bs-slide="prev"
						>
							<span
								className="carousel-control-prev-icon"
								aria-hidden="true"
							></span>
							<span className="visually-hidden">Previous</span>
						</button>
						<button
							className="carousel-control-next"
							type="button"
							data-bs-target={`#image${post._id}`}
							data-bs-slide="next"
						>
							<span
								className="carousel-control-next-icon"
								aria-hidden="true"
							></span>
							<span className="visually-hidden">Next</span>
						</button>
					</div>
				)}
			</div>
			<div className="post__footer">
				<div className="post__footerDescription">
					<div className="post__footerDescLeft">
						<div>
							<span className="post__footerLikeIcon">
								<FaThumbsUp
									color="#fff"
									size="15px"
									style={{
										width: "20px",
									}}
								/>
							</span>
							{post.likes.length}
						</div>
						<div>
							<span className="post__footerDislikeIcon">
								<FaHeartBroken
									color="#fff"
									size="15px"
									style={{
										width: "20px",
									}}
								/>
							</span>
							{post.dislikes.length}
						</div>
					</div>
					<div className="post__footerDescRight">
						<div>{post.comments.length} comments</div>
					</div>
				</div>
				<div className="post__footerActions">
					<div className="post__likeBtn">
						<FaThumbsUp
							color="#000"
							size="20px"
							style={{
								width: "20px",
								marginRight: "10px",
							}}
						/>
						Like
					</div>
					<div className="post__dislikeBtn">
						<FaHeartBroken
							color="#000"
							size="20px"
							style={{
								width: "20px",
								marginRight: "10px",
							}}
						/>
						Dislike
					</div>
					<div className="post__reportBtn">
						<FaFlag
							color="#000"
							size="20px"
							style={{
								width: "20px",
								marginRight: "10px",
							}}
						/>
						Report
					</div>
				</div>
				<div className="post__commentForm">
					<img
						src={user.photoURL}
						alt=""
					/>
					<input
						type="text"
						placeholder="Write a comment"
						name=""
						id=""
					/>
					<div
						className="Button"
						onClick={() => console.log("hello")}
					>
						POST
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
