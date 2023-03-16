import { useState } from "react";

export const useFormValidator = () => {
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    isValid: false,
  });

  const validateForm = ({ username, password }) => {
    const validations = {
      username: "",
      password: "",
      isValid: true,
    };

    if (username === "") {
      validations.username = "Username is required";
      validations.isValid = false;
    }

    if (password === "") {
      validations.password = "Password is required";
      validations.isValid = false;
    }

    setErrors(validations);
  };

  return {
    validateForm,
    errors,
  };
};
