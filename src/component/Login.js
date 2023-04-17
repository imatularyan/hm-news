import { Link, Outlet } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Link to="/admin">
        <p>Admin login</p>
      </Link>
    </div>
  );
};

export default Login;
