import React, { useState, ChangeEvent, FormEvent } from "react";
import { useAppDispatch } from "../../redux/hook";
import { createUser } from "../../redux/features/user/userSlice";
import { toast } from "react-toastify";

const Registration: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(email, password);
    const dis = dispatch(
      createUser({ email: email, password: password })
    ).unwrap();
    //   .then(() => {
    //     toast.success("User Register");
    //   })
    //   .catch((error) => {
    //     toast.error("Failed to register");
    //     console.error(error);
    //   });
    // console.log(dis);
  };

  const handleRegistration = (email: string, password: string): void => {
    // Implement your login logic here
    console.log("Logging in with email:", email);
    console.log("Password:", password);
  };

  const handleRegistrationWithGoogle = (): void => {
    // Implement your Google login logic here
    console.log("Logging in with Google");
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  return (
    <div className="max-w-sm mx-auto">
      <form
        className="bg-white shadow-md rounded px-8 py-6"
        onSubmit={handleFormSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleRegistrationWithGoogle}
          >
            Log in with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
