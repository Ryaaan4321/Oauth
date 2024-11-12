import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase.js";
import { useDispatch } from "react-redux";
import { signinsuccess } from "../redux/user/userslice.js";
import { useNavigate } from "react-router-dom";

export default function Google() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      const res = await fetch("/backend/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photo.URL,
        }),
      });
      const data = await res.json();
      dispatch(signinsuccess(data));
      navigate('/profile')
    } catch (error) {
      console.log("something went wrong", error);
    }
  };
  return (
    <button
      type="button"
      onClick={handleGoogleClick}
      className="bg-red-800 rounded-xl uppercase hover:opacity-80 text-white p-3"
    >
      Continue with Google
    </button>
  );
}
