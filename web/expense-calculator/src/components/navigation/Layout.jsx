import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout">
      <Navigation />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
