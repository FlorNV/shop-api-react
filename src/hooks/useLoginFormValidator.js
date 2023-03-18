import { useState } from "react";

export const useFormValidator = () => {
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const validateForm = ({ username, password }) => {
    const validations = {
      username: "",
      password: "",
    };
    let isValid = true;

    if (username === "") {
      validations.username = "Username is required";
      isValid = false;
    }

    if (password === "") {
      validations.password = "Password is required";
      isValid = false;
    }

    setErrors(validations);
    return isValid;
  };

  return {
    errors,
    validateForm,
  };
};
