import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

const Login = () => {

    const { signInUser, googleLogin, githubLogin } = useContext(AuthContext);
    const navigate = useNavigate()

    // useEffect(() = {
    //   toast('login first')
    // }, [])

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);

        signInUser(email, password)
        .then(result => {
          console.log(result.user);
          e.target.reset();
          navigate('/')
          toast.success('User login via email. success!!')
        })
        .catch(error => {
          console.error(error);
        })
    }
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
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign in now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p>New in <span className="text-">Prime Proparties?</span> Please
              <Link to="/signUp">
                  <button className="btn btn-link">Register</button>
              </Link>
            </p>
              <p className="text-center mb-3">Continue With</p>
              <div className="flex justify-center">
                <button onClick={handleGoogleLogin} className="btn btn-ghost text-4xl tooltip" data-tip="Login With Google"><FcGoogle></FcGoogle></button>
                <button onClick={handleGithubLogin} className="btn btn-ghost text-4xl tooltip" data-tip="Login With Github"><BsGithub></BsGithub></button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
