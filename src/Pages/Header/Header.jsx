import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaSignInAlt } from "react-icons/fa";
import { LiaSignOutAltSolid } from "react-icons/lia";

const Header = () => {

  const { user, logOut } = useContext(AuthContext);
  console.log(user)
  // console.log(user.email)
  const photo_url = (user?.photoURL)
  console.log(photo_url)

  const handleLogOut = () => {
    logOut()
    .then(() => console.log('User Logged Out Successfully'))
    .catch(error => console.error(error))
  }

  const links = (
    <>
      <li className="mr-2 hover:underline">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="mr-2 hover:underline">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="mr-2 hover:underline">
        <NavLink to="/contactUs">Contact Us</NavLink>
      </li>
      <li className="mr-2 hover:underline">
        <NavLink to="/orders">Orders</NavLink>
      </li>
      {!user && <li className="mr-2 hover:underline">
        <NavLink to="/signIn">Sign In</NavLink>
      </li>}
      {user &&
        <li className="mr-2 hover:underline">
          <NavLink to="/profile">Update Profile</NavLink>
        </li>}
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className="text-2xl font-bold select-none">Prime Properties</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end menu menu-horizontal">
          {
            user ? <>
              <div className="flex items-center">
                <span className="text-xs mx-4">{user.email}</span>
                <img title={user.displayName} className="rounded-full h-[50px] w-[50px]" src={photo_url} alt="" />
              </div>
              <a className="select-none tooltip tooltip-bottom text-4xl" data-tip="Sign Out" onClick={handleLogOut}><LiaSignOutAltSolid></LiaSignOutAltSolid></a>
            </> 
            : <Link to='signIn' className="tooltip tooltip-bottom text-3xl" data-tip="Sign In"><FaSignInAlt></FaSignInAlt></Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
