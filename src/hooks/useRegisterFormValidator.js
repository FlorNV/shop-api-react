import { useState } from "react";

export const useRegisterFormValidator = () => {
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    username: "",
    password: "",
  });

  const validateForm = ({
    firstName,
    lastName,
    email,
    phone,
    username,
    password,
  }) => {
    let isValid = true;
    const validations = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      username: "",
      password: "",
    };
    const regex = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]/);

    if (!firstName) {
      validations.firstName = "First name is required";
      isValid = false;
    }
    if (!lastName) {
      validations.lastName = "Last name is required";
      isValid = false;
    }
    if (!email) {
      validations.email = "Email name is required";
      isValid = false;
    } else if (!regex.test(email)) {
      validations.email = "Enter a valid email";
      isValid = false;
    }
    if (!phone) {
      validations.phone = "Phone is required";
      isValid = false;
    }
    if (!username) {
      validations.username = "Username is required";
      isValid = false;
    }
    if (!password) {
      validations.password = "Password is required";
      isValid = false;
    } else if (password.length < 8) {
      validations.password = "Password must have at least 8 characters";
      isValid = false;
    }

    setErrors(validations);

    return isValid;
  };

  return { errors, validateForm };
};
