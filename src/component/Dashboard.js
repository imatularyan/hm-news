import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/">
        <p>User login</p>
      </Link>
    </div>
  );
};

export default Dashboard;
