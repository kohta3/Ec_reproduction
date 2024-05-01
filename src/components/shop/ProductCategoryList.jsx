import React, { useContext, useState,useEffect } from 'react';
import { FarzaaContext } from '../../context/FarzaaContext';
import { allProductList } from '../../data/Data';

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

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const categoryFromURL = queryParams.get('category');
        
        if (categoryFromURL && categories.some(category => category.name === categoryFromURL)) {
            handleCategoryClick("ホエイプロテイン");
        }
    }, []); 

    const handleCategoryClick = (category) => {
        handleCategoryFilter(category);
        setActiveCategory(category);
    };

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
