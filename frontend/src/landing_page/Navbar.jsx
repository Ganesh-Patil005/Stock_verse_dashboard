import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

export default function Navbar() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
 
  const [isLoading, setIsLoading] = useState(false);
  const handleDashboard = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!cookies.token) {
        alert("u have to login");
        navigate("/login");
      }

      const { data } = await axios.post(
        "https://stock-verse-gvyo.onrender.com",
        {},
        { withCredentials: true }
      );

      const { status } = data;
      if (status) {
        window.open("http://localhost:5173", "_blank");
      } else {
        removeCookie("token");
        alert("session expired login first");
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    removeCookie("token");
    alert("You Have loged out");
    navigate("/login");
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          <img src="media/logo3.png" style={{ width: "25%" }} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse p-2"
          id="navbarSupportedContent"
        >
          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/signup"}
                >
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={"/about"}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={"/product"}>
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={"/pricing"}>
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={"/support"}>
                  Support
                </Link>
              </li>
              <li className="nav-item">
               
                  <a className="nav-link" href="#" onClick={handleLogout}>
                    Logout
                  </a>
              
              </li>

              <li>
                <a
                  className="nav-link active"
                  href="#"
                  onClick={handleDashboard}
                  style={{
                    opacity: isLoading ? 0.6 : 1,
                    cursor: isLoading ? "not-allowed" : "pointer",
                  }}
                >
                  {isLoading ? "Checking..." : "Dashboard"}
                </a>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}
