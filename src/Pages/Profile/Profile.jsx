import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Profile = () => {

const { profileUpdate } = useContext(AuthContext);

const handleProfileUpdate = () => {
        e.preventDefault();
        const email = e.target.email.value
        const photo_url = e.target.photo_url.value
        console.log(email, photo_url);

        profileUpdate(email, photo_url)
        .then(result => {
          console.log(result.user);
          e.target.reset();
          toast.success('profile update. success!!')
        })
        .catch(error => {
          console.error(error);
        })
}


  return (
    <div>
      <form onSubmit={handleProfileUpdate}>
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
          <input
            type="text"
            className=""
            name="photo_url"
            placeholder="PhotoURL"
          />
        </label>
          <button className="btn btn-primary" type="submit">
            Update Profile
          </button>
      </form>
    </div>
  );
};

export default Profile;
