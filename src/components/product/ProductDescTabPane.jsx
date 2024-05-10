import React from 'react'

const ProductDescTabPane = (props) => {
  const product = props.product;
  return (
    <div className="fz-product-details__descr">
        <p>Each controller comes with adjustable in-built dual shock mechanism. They can be toggled on/off and shock setting of 1,2 and 3 Auxiliary
            buttons around the home button enable more key bindings to be designated. Designed as PS3 Controllers Can be used in all PC to enough
            time to play Condition 8.5/10 Only a small rust on one of the USB heads. A very minor crack at the bottom of the Red Controller
        </p>

        <div className="fz-product-details__short-descr">
              <ul>
                {!product?"<li>loading</li>":
                  product.description.map((description,index) => (
                    <li key={index}>{description}</li>
                  ))
                }
            </ul>
          </div>
    </div>
  )
}

export default ProductDescTabPane