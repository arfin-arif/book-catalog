import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/features/user/userSlice";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { user, isLoading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    // Perform login logic with email and password values
    dispatch(loginUser({ email: email, password: password }));
    console.log(email, password);
  };
  console.log(user);

  useEffect(() => {
    const storedEmail = localStorage.getItem("userEmail");

    if (user?.email && !isLoading) {
      localStorage.setItem("userEmail", user.email); // Set the email to local storage
      navigate("/");
    }
  }, [user.email, isLoading]);

  if (user.email && !isLoading) {
    navigate("/");
  }

  const handleLogin = (email: string, password: string): void => {
    // Implement your login logic here
    console.log("Logging in with email:", email);
    console.log("Password:", password);
  };

  const handleLoginWithGoogle = (): void => {
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
            Log In
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleLoginWithGoogle}
          >
            Log in with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
