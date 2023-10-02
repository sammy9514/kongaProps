import { Header } from "./Header";
import { Outlet } from "react-router-dom";
// import ColorChanger from "./Footer";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
