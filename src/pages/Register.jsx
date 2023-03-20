import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Field } from "../components/Field";
import { AuthContext } from "../contexts/AuthContext";
import { useField } from "../hooks/useField";
import { useRegisterFormValidator } from "../hooks/useRegisterFormValidator";

export const Register = () => {
  const { signup, error } = useContext(AuthContext);
  const firstName = useField({ type: "text", name: "firstName" });
  const lastName = useField({ type: "text", name: "lastName" });
  const email = useField({ type: "email", name: "email" });
  const phone = useField({ type: "phone", name: "phone" });
  const username = useField({ type: "text", name: "username" });
  const password = useField({ type: "password", name: "password" });
  const { errors, validateForm } = useRegisterFormValidator();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      phone: phone.value,
      username: username.value,
      password: password.value,
    };

    const isValid = validateForm(data);

    if (isValid) {
      signup(data);
    }
  };

  return (
    <div className="w-full md:w-11/12 max-w-3xl flex flex-col p-12 bg-white md:mx-auto md:my-12 md:rounded-md md:shadow-md">
      <form onSubmit={handleSubmit} className="px-10" noValidate>
        {error && <p className="text-red-400 text-center">{error}</p>}

        <Field label="First Name" field={firstName} errors={errors.firstName} />
        <Field label="Last Name" field={lastName} errors={errors.lastName} />
        <Field label="Email" field={email} errors={errors.email} />
        <Field label="Phone" field={phone} errors={errors.phone} />
        <Field label="Username" field={username} errors={errors.username} />
        <Field label="Password" field={password} errors={errors.password} />

        <button
          type="submit"
          className="inline-block text-white bg-indigo-400 font-semibold hover:bg-indigo-400/80 transition-colors duration-200 rounded-md px-6 py-2 mr-4 mt-6"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};
