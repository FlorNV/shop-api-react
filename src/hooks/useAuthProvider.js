import { useState } from "react";
import { login } from "../services/login";
import { register } from "../services/register";

export const useAuthProvider = () => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const signin = (body) => {
    login(body)
      .then((data) => {
        if (data.message) {
          setError(data.message);
          return;
        }
        console.log(data);
        setError(null);
        setToken(data.token);
        setUser(data);
        localStorage.setItem("token", JSON.stringify(data.token));
        localStorage.setItem("user", JSON.stringify(data));
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  };

  const signout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const signup = (body) => {
    register(body).then((data) => {
      if (data.message) {
        setError(data.message);
        return;
      }
      console.log(data);
      setError(null);
    });
  };

  return { token, user, error, signin, signout, signup };
};
