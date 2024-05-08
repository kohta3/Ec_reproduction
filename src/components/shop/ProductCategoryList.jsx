import React, { useContext, useState,useEffect } from 'react';
import { FarzaaContext } from '../../context/FarzaaContext';
import { allProductList } from '../../data/Data';
import { useSearchParams } from "next/navigation";
import { useRouter } from 'next/router';


const categories = [
    { name: null, label: 'すべての商品' },
    { name: 'ホエイプロテイン', label: 'ホエイプロテイン' },
    { name: 'ソイプロテイン', label: 'ソイプロテイン' },
    { name: '混合プロテイン', label: '混合プロテイン' },
    { name: 'カゼインプロテイン', label: 'カゼインプロテイン' }
];

const ProductCategoryList = () => {
    const { handleCategoryFilter } = useContext(FarzaaContext);
    const [activeCategory, setActiveCategory] = useState(null);

    const router = useRouter();
    const [key, setKey] = useState(0);

    const handleCategoryClick = useCallback((category) => {
        handleCategoryFilter(category);
        setActiveCategory(category);
    }, [handleCategoryFilter]);

    const searchParams = useSearchParams();
    const categoryFromURL = searchParams.get('category');

    useEffect(() => {
        const handleRouteChange = (url) => {
            if (url === router.asPath) {setKey(prev => prev + 1);}} 
            if (categoryFromURL) {
                handleCategoryClick(categoryFromURL);            
            }else{
                handleCategoryClick(null);
            }    
            router.events.on('routeChangeComplete', handleRouteChange);

            return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
            };
    }, [router.asPath, router.events,categoryFromURL, handleCategoryClick]); 

    return (
        <section className="sidebar-single-area product-categories-area">
            <h3 className="sidebar-single-area__title">カテゴリー</h3>
            <ul className="product-categories">
                {categories.map(categoryObj => (
                    <li
                        key={categoryObj.name}
                        onClick={() => handleCategoryClick(categoryObj.name)}
                        className={activeCategory === categoryObj.name ? 'active' : ''}
                    >
                        {categoryObj.label} ({categoryObj.name === null ? allProductList.length : allProductList.filter(product => product.category === categoryObj.name).length})
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ProductCategoryList;
