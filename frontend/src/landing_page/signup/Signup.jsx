import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-center",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://stock-verse-gvyo.onrender.com/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/",{replace: true});
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
   <div className="container mt-5" style={{ maxWidth: "400px" }}>
  <h2 className="mb-4 text-center text-muted">Signup Account</h2>
  <form onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">Email</label>
      <input
        type="email"
        name="email"
        value={email}
        placeholder="Enter your email"
        onChange={handleOnChange}
        className="form-control"
        id="email"
        required
      />
    </div>
    <div className="mb-3">
      <label htmlFor="username" className="form-label">Username</label>
      <input
        type="text"
        name="username"
        value={username}
        placeholder="Enter your username"
        onChange={handleOnChange}
        className="form-control"
        id="username"
        required
      />
    </div>
    <div className="mb-4">
      <label htmlFor="password" className="form-label">Password</label>
      <input
        type="password"
        name="password"
        value={password}
        placeholder="Enter your password"
        onChange={handleOnChange}
        className="form-control"
        id="password"
        required
      />
    </div>
    <button type="submit" className="btn btn-primary w-100">Submit</button>
    <div className="mt-3 text-center">
      <span>
        Already have an account? <Link to={"/login"}>Login</Link>
      </span>
    </div>
  </form>
  <ToastContainer />
</div>

  );
};

export default Signup;
