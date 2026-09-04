import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/">首頁</NavLink>
      <NavLink to="/courses">課程與學生</NavLink>
      <NavLink to="/about">關於網站</NavLink>
    </nav>
  );
}

export default Navigation;

