import React from 'react';
import Hero from '../Hero/Hero';
import Popular from '../Popular/Popular';
import Offers from '../Offers/Offers';
import Newcollections from '../NewCollections/Newcollections';

function Shop(){
    return(
        <>
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <Newcollections />

        </div>
        </>
    )
}

export default Shop;