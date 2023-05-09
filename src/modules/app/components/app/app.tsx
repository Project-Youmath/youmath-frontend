import {Route, Routes} from "react-router-dom";
import {CategoryPage} from "../../../../pages/category-page/category-page";
import {MainPage} from "../../../../pages/main-page/main-page";
import {useEffect} from "react";
import {api} from "../../../../api/api";

export const App = () => {

    useEffect(() => {
        api.getAllCategories().then(data => console.log(data))
    },[])

  return (
        <Routes>
            <Route path={"/"} element={<MainPage/>}/>
            <Route path={"/category/:id"} element={<CategoryPage/>}/>
            <Route path={"*"} element={<MainPage/>}/>
        </Routes>
  );
};

