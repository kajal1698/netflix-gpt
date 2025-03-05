import { useNavigate } from "react-router-dom";
import { auth } from "../utilis/firebase";
import { signOut } from "firebase/auth"
const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = ()=>{
signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/");
}).catch((error) => {
  // An error happened.
})
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      ></img>
      <div className="flex p-4">
        <img alt="user-icon" src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" className="w-10 h-10"></img>
        <button className="p-2" onClick={handleSignOut}>{'Sign Out'}</button>
      </div>
    </div>
  );
};
export default Header;
