import React, { useContext } from 'react'
import { FarzaaContext } from '../../context/FarzaaContext'
import Link from 'next/link'
import HeaderNav from '../navigation/HeaderNav'
import WishlistModal from '../modal/WishlistModal'
import Image from 'next/image'

const HeaderSection = () => {
    const {
        isHeaderFixed,
        handleWishlistShow,
        wishlist,
        handleRemoveItemWishlist,
        handleSidebarOpen,
        wishlistItemAmount
    } = useContext(FarzaaContext)
  return (
    <header className="fz-header-section fz-1-header-section">
        <div className={`bottom-header to-be-fixed ${isHeaderFixed? 'fixed':''}`}>
            <div className="container">
                <div className="row g-0 align-items-center">
                    <div className="col-5 header-nav-container d-lg-block d-none">
                        <HeaderNav position={''}/>
                    </div>

                    <div className="col-lg-2 col-md-6 col-9">
                        <div className="fz-logo-container text-lg-center text-start">
                            <Link href="/" style={{position:"relative"}}>
                                <Image fetchpriority="high" src='/assets/images/logo/logo_black.png' alt="logo" className="fz-logo" width={800} height={250} />
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-6 col-3">
                        <div className="fz-header-right-content">
                            <ul className="fz-header-right-actions d-flex align-items-center justify-content-end">
                                <li>
                                    <button className="fz-header-wishlist-btn d-none d-lg-block" onClick={handleWishlistShow}>
                                        <i className="fa-light fa-heart"></i>
                                        <span className="count">{wishlistItemAmount}</span>
                                    </button>
                                </li>
                                <li className="d-block d-lg-none"><a role="button" className="fz-hamburger" onClick={handleSidebarOpen}><i className="fa-light fa-bars-sort"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <WishlistModal wishlistArray={wishlist} removeItem={handleRemoveItemWishlist}/>
        {/* <CartModal cartArray={cartItems} remove={handleRemoveItem} quantity={handleQuantityChange}/> */}
    </header>
  )
}

export default HeaderSection