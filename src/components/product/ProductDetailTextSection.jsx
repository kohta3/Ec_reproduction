import React from 'react'
import ProductDetailAction from './ProductDetailAction';

const ProductDetailTextSection = (props) => {
    const product = props.product;
    return (
        <>

            <div className="fz-product-details__txt">
                <h2 className="fz-product-details__title">{!product?"loading":product.name}</h2>
                <div className="fz-product-details__price-rating">
                    <span className="price">&yen;{!product?"loading":parseInt(product.price,10).toLocaleString()}円</span>
                    <div className="rating">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-light fa-star"></i>
                    </div>
                </div>

                <div className="fz-product-details__infos">
                    <ul>
                        <li><span className="info-property"> Category </span> : <span className="info-value">{!product?"loading":product.category}</span></li>
                        <li><span className="info-property"> Availablity </span> : <span className="info-value">in Stock</span></li>
                    </ul>
                </div>

                <p className="fz-product-details__short-descr">
                    <ul>
                        {!product?"<li>loading</li>":
                            product.description.map((description,index) => (
                                <li key={index}>{description}</li>
                            ))
                        }
                    </ul>
                </p>

                <ProductDetailAction url={!product?"loading":product.affiliate} />

                <div className="fz-product-details__payment-methods">
                    <img src="/assets/images/card.png" alt="Pyament Methods" />
                    <span className="dialog">Guaranteed safe & secure checkout</span>
                </div>
            </div>
        </>
    )
}

export default ProductDetailTextSection