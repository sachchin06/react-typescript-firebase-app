import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };
  return (
    <div className="navbar">
      <div className="links">
        <Link className='link' to="/"> Home </Link>
        {!user && <Link className='link' to="/login"> Login </Link>}
      </div>
      <div className="user">
        {user && (
          <>
            <p> {user?.displayName} </p>
            <button onClick={signUserOut}> Log Out</button>
            <img
              src={user?.photoURL || ""}
              width="30"
              height="30"
              alt="accountImage"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
