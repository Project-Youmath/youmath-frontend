import {SearchSection} from "../../modules/search-section";
import {Header} from "../../components/header";
import {Footer} from "../../components/footer";
import React from "react";
import {PopularTaskSection} from "../../modules/popular-task-section";
import {PopularCategorySection} from "../../modules/popular-category-section";

export const MainPage = () => {
    return (
        <>
            <Header isPageHaveSearchSection={true}/>
            <SearchSection/>
            <PopularTaskSection/>
            <PopularCategorySection/>
            <Footer/>
        </>
    );
};
