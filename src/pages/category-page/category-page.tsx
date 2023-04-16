import React from 'react';
import {Header} from "../../components/header";
import {Footer} from "../../components/footer";
import {CategorySection} from "../../modules/category-section";

export const CategoryPage = () => {
    return (
        <>
            <Header isPageHaveSearchSection={false}/>
            <CategorySection/>
            <Footer/>
        </>
    );
};
