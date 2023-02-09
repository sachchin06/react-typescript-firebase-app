import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    // console.log(result);

    navigate("/");
  };
  
  return (
    <div>
      Sign In with Google to Continue
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  );
};

export default Login;