import React from 'react';

function Breadcrumbs(props) {
    const {product} = props;
    return(
        <>
        <div className='flex flex-row'>
            HOME > SHOP > {product.category} <img src="" alt="" />

        </div>
        </>
    )
}

export default Breadcrumbs;