import { FarzaaContext } from '../../context/FarzaaContext';
import React, { useContext } from 'react'
import { Form } from 'react-bootstrap'

const ProductViewFilter = () => {
    const {
        isListView,
        setListView,
        setGridView,
        handleSortChange,
        sortBy,
        currentPage,
        productsPerPage,
        totalProducts,
    } = useContext(FarzaaContext)
    const startItem = (currentPage - 1) * productsPerPage + 1;
    const endItem = Math.min(currentPage * productsPerPage, totalProducts);
  return (
    <div className="product-view-actions">
        <div className="row gy-3 align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-5 col-6 col-xxs-12 text-center text-md-start">
                <p className="text-center text-sm-start"> {totalProducts} 件中 {startItem}-{endItem} 件を表示</p>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-7 col-6 col-xxs-12 col-sm-6">
                <div className="product-view-right-actions text-center text-md-end d-flex justify-content-center justify-content-md-end">
                    <div className="view-type">
                        <button className={`grid-view ${isListView? '' :'active'}`} onClick={setGridView}>
                            <i className="fa-solid fa-grid-2"></i>
                        </button>

                        <button className={`list-view ${isListView? 'active' :''}`} onClick={setListView}>
                            <i className="fa-light fa-list"></i>
                        </button>
                    </div>

                    <div className="product-sorting d-inline-block">
                        <form className="" action="#">
                            <Form.Select className="nice-select" onChange={handleSortChange} value={sortBy}>
                            <option value="">表示順</option>
                            <option value="name-az">商品名(昇順)</option>
                            <option value="name-za">商品名(降順)</option>
                            <option value="price-low-high">価格(低～高)</option>
                            <option value="price-high-low">価格(高～低)</option>
                            </Form.Select>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductViewFilter