import React, { useState } from "react";
import "./Profile.css";
import coverimage from "./pexels.jpg";
import Header from "../Header/Header";
import useAuth from "../../config/context/AuthContext";
import axios from "axios";
import { auth } from "../../config/Firebase/Firebase";
import { toast } from "react-toastify";
import { GLOBAL_URL } from "../../config/global/contant";

const Profile = () => {
	const { userData, setUserData } = useAuth();
	const [firstName, setfirstName] = useState(userData.firstName);
	const [lastName, setlastName] = useState(userData.lastName);
	const [designation, setdesignation] = useState(userData.designation);
	const [website, setwebsite] = useState(userData.website);
	const [gender, setgender] = useState(userData.gender);
	const [birthday, setbirthday] = useState(userData.birthday);
	const [city, setcity] = useState(userData.city);
	const [state, setstate] = useState(userData.state);
	const [zip, setzip] = useState(userData.zip);

	const userUpdateProfile = async (e) => {
		e.preventDefault();
		const token = await auth.currentUser.getIdToken();
		await axios
			.post(
				`${GLOBAL_URL}/api/auth/${userData._id}/userprofile`,
				{
					firstName: firstName,
					lastName: lastName,
					designation: designation,
					website: website,
					gender: gender,
					dateOfBirth: birthday,
					city: city,
					state: state,
					pincode: zip,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			)
			.then((res) => {
				console.log(res);
				setUserData(res.data);
				toast.success("user profile updated successfully");
			})
			.catch((err) => {
				console.log(err);
				toast.error("something went wrong");
			});
	};

	return (
		<>
			<Header />
			<div className="container position-relative">
				<img src={coverimage} className="img-thumbnail" alt="image" />
				<img
					src={userData.profileImage}
					className="position-absolute start-0 rounded-circle ms-5 mb-5"
					style={{ height: "120px", width: "120px", bottom: "30px" }}
					alt=""
				/>
				<hr className="mt-5" />
				<h2>
					{userData.firstName} {userData.lastName}
				</h2>
			</div>

			<div class="container">
				<form class="form-inline" action="">
					<div className="row">
						<div class="col-md-6">
							<label for="FirstNAme">FirstName</label>
							<input
								class="form-control"
								id="FirstNAme"
								value={firstName}
								onChange={(e) => setfirstName(e.target.value)}
								type="text"
								placeholder="First Name"
							/>{" "}
						</div>
						<div class="col-md-6">
							<label htmlFor="LastName">LastName</label>
							<input
								class="form-control"
								type="text"
								name="LastName"
								value={lastName}
								onChange={(e) => setlastName(e.target.value)}
								id="LastName"
								placeholder="Last Name"
							/>
						</div>
					</div>
					<div className=" row">
						<div className="col-md-6">
							<label htmlFor="Designation">Designation</label>
							<input
								class="form-control"
								type="text"
								name="Designation"
								value={designation}
								onChange={(e) => setdesignation(e.target.value)}
								id="Designation"
								placeholder="Designation"
							/>
						</div>
						<div className="col-md-6">
							<label htmlFor="My Website">My Website</label>
							<input
								class="form-control"
								type="text"
								name="My Website"
								value={website}
								onChange={(e) => setwebsite(e.target.value)}
								id="My Website"
								placeholder="website.org"
							/>
						</div>
					</div>
					<div className=" row">
						<div className="col-md-6">
							<label for="Gender">Gender</label>
							<select
								className="form-select"
								name="Gender"
								id="Gender"
								value={gender}
								onChange={(e) => setgender(e.target.value)}
							>
								<option value="male">Male</option>
								<option value="female">Female</option>
								<option value="other">other</option>
							</select>
						</div>
						<div className="col-md-6">
							<label for="Birthday">Birthday</label>
							<input
								class="form-control"
								type="date"
								name="Birthday"
								id="Birthday"
								value={birthday}
								onChange={(e) => setbirthday(e.target.value)}
							/>
						</div>
					</div>
					<div className=" row">
						<div className="col-md-6">
							<label htmlFor="City">City</label>
							<input
								class="form-control"
								type="text"
								name="City"
								id="City"
								value={city}
								onChange={(e) => setcity(e.target.value)}
							/>
						</div>

						<div className="col-md-3">
							<label for="State">State</label>
							<select
								className="form-select"
								name="State"
								id="State"
								value={state}
								onChange={(e) => setstate(e.target.value)}
							>
								<option value="Andhra Pradesh">
									Andhra Pradesh
								</option>
								<option value="Andaman and Nicobar Islands">
									Andaman and Nicobar Islands
								</option>
								<option value="Arunachal Pradesh">
									Arunachal Pradesh
								</option>
								<option value="Assam">Assam</option>
								<option value="Bihar">Bihar</option>
								<option value="Chandigarh">Chandigarh</option>
								<option value="Chhattisgarh">
									Chhattisgarh
								</option>
								<option value="Dadar and Nagar Haveli">
									Dadar and Nagar Haveli
								</option>
								<option value="Daman and Diu">
									Daman and Diu
								</option>
								<option value="Delhi">Delhi</option>
								<option value="Lakshadweep">Lakshadweep</option>
								<option value="Puducherry">Puducherry</option>
								<option value="Goa">Goa</option>
								<option value="Gujarat">Gujarat</option>
								<option value="Haryana">Haryana</option>
								<option value="Himachal Pradesh">
									Himachal Pradesh
								</option>
								<option value="Jammu and Kashmir">
									Jammu and Kashmir
								</option>
								<option value="Jharkhand">Jharkhand</option>
								<option value="Karnataka">Karnataka</option>
								<option value="Kerala">Kerala</option>
								<option value="Madhya Pradesh">
									Madhya Pradesh
								</option>
								<option value="Maharashtra">Maharashtra</option>
								<option value="Manipur">Manipur</option>
								<option value="Meghalaya">Meghalaya</option>
								<option value="Mizoram">Mizoram</option>
								<option value="Nagaland">Nagaland</option>
								<option value="Odisha">Odisha</option>
								<option value="Punjab">Punjab</option>
								<option value="Rajasthan">Rajasthan</option>
								<option value="Sikkim">Sikkim</option>
								<option value="Tamil Nadu">Tamil Nadu</option>
								<option value="Telangana">Telangana</option>
								<option value="Tripura">Tripura</option>
								<option value="Uttar Pradesh">
									Uttar Pradesh
								</option>
								<option value="Uttarakhand">Uttarakhand</option>
								<option value="West Bengal">West Bengal</option>
							</select>
						</div>

						<div className="col-md-3">
							<label htmlFor="Zip">Zip</label>
							<input
								class="form-control"
								type="number"
								maxLength={6}
								placeholder="201310"
								value={zip}
								onChange={(e) => setzip(e.target.value)}
							/>
						</div>
					</div>
					<div className="container">
						<button
							type="submit"
							onClick={(e) => userUpdateProfile(e)}
							class="btn btn-primary me-5"
						>
							Save
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default Profile;
