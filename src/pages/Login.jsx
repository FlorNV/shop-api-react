import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useField } from "../hooks/useField";
import { useFormValidator } from "../hooks/useLoginFormValidator";
import image from "../assets/box.jpg";
import { AuthContext } from "../contexts/AuthContext";

export const Login = () => {
  const { signin, error, user } = useContext(AuthContext);
  const username = useField({ type: "text", name: "Username" });
  const password = useField({ type: "password", name: "Password" });
  const { errors, validateForm } = useFormValidator();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: username.value,
      password: password.value,
    };

    const isValid = validateForm(data);

    if (isValid) {
      const body = {
        ...data,
        expiresInMins: 60,
      };
      signin(body);
    }
  };

  useEffect(() => {
    if (!error && user) {
      navigate("/");
    }
  }, [error, user]);

  return (
    <div className="w-max flex flex-col md:flex-row md:items-center p-12 md:p-0 bg-white mx-auto mt-12 rounded-md shadow-md">
      <div className="md:h-96 md:w-80 md:relative">
        <div className="md:absolute w-full h-full flex flex-col justify-center md:bg-indigo-400/60 md:text-white rounded-l-md">
          <h3 className="text-2xl font-semibold mx-auto md:mx-6">
            Login to your account
          </h3>
          <span className="hidden md:block mx-6 mt-4">
            Get access to your orders, favorites and recommendations.
          </span>
        </div>
        <img
          src={image}
          alt="login imagen"
          className="hidden md:block h-full w-full object-cover rounded-l-md"
        />
      </div>
      <form onSubmit={handleSubmit} className="w-96 px-10">
        {error && <p className="text-red-400 text-center">{error}</p>}
        <label className="flex flex-col mt-6">
          <span>Username</span>
          <input
            {...username}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
          />
        </label>
        {errors.username && <p className="text-red-400">{errors.username}</p>}
        <label className="flex flex-col mt-6">
          <span>Password</span>
          <input
            {...password}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
          />
        </label>
        {errors.password && <p className="text-red-400">{errors.password}</p>}
        <button
          type="submit"
          className="inline-block text-white bg-indigo-400 font-semibold hover:bg-indigo-400/80 transition-colors duration-200 rounded-md px-6 py-2 mr-4 mt-6"
        >
          Login
        </button>
        <Link to="/register" className="inline-block text-indigo-400">
          Create account
        </Link>
      </form>
    </div>
  );
};
