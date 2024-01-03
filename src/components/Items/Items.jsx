import React from 'react';
import { Link } from 'react-router-dom';

function Items(props){
    return(
        <>
        <div>
           <Link to={`/product/${props.id}`}> <img src={props.image} alt="" /> </Link>
            <p>{props.name}</p>
            <div className="flex justify-between">
               <p className="text-red-600">${props.new_price}</p>
                <strike><p>${props.old_price}</p></strike>
            </div>

        </div>
        </>
    )
}

export default Items;