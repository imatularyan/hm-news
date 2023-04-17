import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/login">
        <p>User login</p>
      </Link>
    </div>
  );
};

export default Dashboard;
