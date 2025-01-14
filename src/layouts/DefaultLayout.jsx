import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader";
import { useContext } from "react";
import GlobalContext from "../context/globalContext";


function DefaultLayout() {

  const { isLoading } = useContext(GlobalContext);

  return (
    <>
      <Header />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
      { isLoading && <Loader />}
    </>
  );
}

export default DefaultLayout;
