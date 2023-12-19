import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import { useAppDispatch } from "./store/hooks/use-app-dispatch";
import { getAllCategoriesThunk } from "./store/thunks";
import Header from "./layouts/header";
import Footer from "./layouts/footer";

export const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllCategoriesThunk());
  }, [dispatch]);

  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <section className="app">
      <Header />
      <section className="page">
        <Outlet />
      </section>
      <Footer />
    </section>
  );
};
