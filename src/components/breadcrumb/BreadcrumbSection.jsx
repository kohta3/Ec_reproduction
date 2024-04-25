    import React from 'react'
    import Link from 'next/link'

    const BreadcrumbSection = ({title,current}) => {
    return (
        <>
        <div className="fz-inner-page-breadcrumb">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-12">
                        <div className="breadcrumb-txt">
                            <h1>{title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ul className="fz-inner-page-breadcrumb-nav">
            <li><Link href="/">ホーム</Link></li>
            {current.map((value, index) => (
                index !== current.length - 1?
                <li key={index} className= "current-before-page"><Link href={`${value.url}`}>{value.label}</Link></li>:
                <li key={index} className= "current-page">{value.label}</li>                
            ))}
        </ul>
        </>
    )
    }

    export default BreadcrumbSection