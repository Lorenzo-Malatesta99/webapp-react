import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";


function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default DefaultLayout;
