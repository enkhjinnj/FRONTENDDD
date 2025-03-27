import { Outlet, Link, useNavigate } from "react-router-dom";
import "./layout.css";

const Layout = ({ user, setUser }) => {
  const navigate = useNavigate();

  const logOut = () => {
    setUser(null);
    navigate("/");
  };


  return (
    <>
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/cart" className="nav-link">Cart</Link>
        <Link to="/contact" className="nav-link">Contact</Link>

        <span style={{ marginLeft: "auto" }}>
          {!user ? (
            <Link to="/login" className="nav-link">Login</Link>
          ) : (
            <span onClick={logOut} className="nav-link" style={{ cursor: "pointer" }}>
              Logout
            </span>
          )}
        </span>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
