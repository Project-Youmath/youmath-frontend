import { Outlet, ScrollRestoration } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "./store/hooks/use-app-dispatch";
import { getAllCategoriesThunk } from "./store/thunks";
import Header from "./layouts/header";
import Footer from "./layouts/footer";

export const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllCategoriesThunk());
  }, [dispatch]);

  return (
    <section className="app">
      <Header />
      <section className="page">
        <Outlet />
      </section>
      <Footer />
      <ScrollRestoration
        getKey={(location, matches) => {
          return location.key;
        }}
      />
    </section>
  );
};
