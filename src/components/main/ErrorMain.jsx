import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ErrorMain = () => {
  return (
    <div className='error-container'>
        <div className='error-content' style={{position:"relative"}}>
            <Image src='assets/images/404-image.png' alt='error-img' width={600} height={400} style={{width:"100%"}}/>
            <h2 className='error-text'>No Page Found!</h2>
            <Link href='/' className='fz-1-banner-btn update-cart-btn'>Go Back to Home</Link>
        </div>
    </div>
  )
}

export default ErrorMain