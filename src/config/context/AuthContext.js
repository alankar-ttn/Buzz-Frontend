import axios from "axios";
import {
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import React, {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase/Firebase";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);
	const [loadingInitial, setLoadingInitial] = useState(true);
	const [posts, setPosts] = useState([]);

	const navigation = useNavigate();

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser(null);
			}
			setLoadingInitial(false);
		});
	}, []);

	const signInWithGoogle = async () => {
		const provider = new GoogleAuthProvider();
		await signInWithPopup(auth, provider).then(async (result) => {
			const user = result.user;
			localStorage.setItem("token", user.accessToken);
			await axios
				.post("http://127.0.0.1:5000/api/auth/register/google", {
					email: user.email,
					firstName: user.displayName.split(" ")[0],
					lastName: user.displayName.split(" ")[1],
					uid: user.uid,
					profileImage: user.photoURL,
				})
				.then((res) => {
					console.log(res);
					navigation("/");
				})
				.catch((err) => console.log(err.response));
		});
	};

	const logout = () => {
		setLoading(true);
		signOut(auth)
			.catch((err) => console.log(err))
			.finally(() => setLoading(false));
	};

	const getPosts = async () => {
		const token = await auth.currentUser.getIdToken();
		await axios
			.get("http://127.0.0.1:5000/api/posts", {
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + token,
				},
			})
			.then((res) => {
				setPosts(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const memoedValue = useMemo(
		() => ({
			signInWithGoogle,
			user,
			loading,
			logout,
			getPosts,
			posts,
		}),
		[user, loading, posts]
	);

	return (
		<AuthContext.Provider value={memoedValue}>
			{!loadingInitial && children}
		</AuthContext.Provider>
	);
};

export default function useAuth() {
	return useContext(AuthContext);
}
