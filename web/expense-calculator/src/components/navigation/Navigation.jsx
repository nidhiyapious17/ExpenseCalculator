import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/home">Dashboard</Link>
        </li>
        <li>Reports</li>
        <li>Expenses</li>
        <li>Savings</li>
        <li>
          <Link to="/income">Income</Link>
        </li>
      </ul>
    </nav>
  );
}
