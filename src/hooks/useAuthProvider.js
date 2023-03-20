import { useState } from "react";
import { login } from "../services/login";
import { register } from "../services/register";

export const useAuthProvider = () => {
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
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
  };

  const signout = () => {
    console.log("signout");
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

  return { user, error, signin, signout, signup };
};
