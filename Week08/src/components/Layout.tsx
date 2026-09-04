import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

function Layout() {
  return (
    <>
      <header className="site-header">
        <div className="container">
          <p className="eyebrow">Week 8 Practice</p>
          <h1>課程管理網站</h1>
          <Navigation />
        </div>
      </header>

      <Outlet />

      <footer className="site-footer">
        <p>React + TypeScript 練習</p>
      </footer>
    </>
  );
}

export default Layout;

