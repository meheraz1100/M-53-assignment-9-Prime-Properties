import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

const Register = () => {
  const { createUser, googleLogin, githubLogin, profileUpdate } = useContext(AuthContext);
  const [error, setError] = useState("")

  const navigate = useNavigate();

  // console.log(authInfo);

  const handleregister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo_url = e.target.photo_url.value
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirm_password = e.target.confirm_password.value
    console.log(name, photo_url, email, confirm_password, password);
    
    
    // email validation
    if(!/@gmail\.com$/.test(email)){
      toast.warn("Please enter a valid email address")
      return;
    }

    // password validation
    if(password.length <6){
      toast.warn("Password must be at least 6 characters")
      return
    }
    if(password !== confirm_password){
      toast.warn("Both password Must be equal")
      return
    }
    const uppercaseRegex = /^(?=.*[A-Z]).+$/;
    if(!uppercaseRegex.test(password)){
      toast.warn("Password must contain at least one uppercase letter")
      return
    }
    const lowercaseRegex = /^(?=.*[a-z]).+$/;
    if(!lowercaseRegex.test(password)){
      toast.warn("Password must contain at least one lowercase letter")
      return
    }


    // create user in firebase
    createUser(email, password)
      .then((result) => {
        profileUpdate(name, photo_url)
        toast.success('User created successfully')
        navigate('/')
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
    .then(result => {
      console.log(result.user);
      navigate('/')
      toast.success('User login with Google successfully')
    })
  }

  const handleGithubLogin = () => {
    githubLogin()
    .then(result => {
      console.log(result.user);
      navigate('/')
      toast.success('User login with Github successfully')
    })
  }

  return (
    <div className="w-[40%] mx-auto min-w-[500px]">
      <form onSubmit={handleregister}>
        <label className="input input-bordered flex items-center gap-2 my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input type="text" name="name" className="" placeholder="Name" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input type="text" className="" name="photo_url" placeholder="PhotoURL" />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input type="email"  className="" name="email" placeholder="Email" />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input type="password" className="" name="password" placeholder="Password" />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className=""
            name="confirm_password"
            placeholder="Confirm Password"
          />
        </label>
        <div className="text-center">
          <button className="btn btn-primary" type="submit">Register</button>
        </div>
        <p className="text-center">Already have an Account? Please <NavLink to="/signIn" className="btn btn-ghost">Sign in</NavLink></p>
      </form>
      <div className="flex justify-center">
          <button onClick={handleGoogleLogin} className="btn btn-ghost text-4xl tooltip" data-tip="Register With Google"><FcGoogle></FcGoogle></button>
          <button onClick={handleGithubLogin} className="btn btn-ghost text-4xl tooltip" data-tip="Register With Github"><BsGithub></BsGithub></button>
      </div>
    </div>
  );
};

export default Register;

{
  /*<p>
              Already Have an Account? Please
              <Link to="/signIn">
                <button className="btn btn-link">Login</button>
              </Link>
            </p> */
}
