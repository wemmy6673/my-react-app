import React from 'react';
import FooterLogo from '../../images/sliklogo.png';
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

function Footer(){
    
    return(
        <>
        <div className='flex flex-col items-center space-y-5'>
            <div className=''>
            <img src={FooterLogo} alt="" width="100" height="100"/>

            </div>
            <div>
                <ul className='flex flex-row space-x-1 md:space-x-10 py-6'>
                    <li>Company</li>
                    <li>Products</li>
                    <li>Offices</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

            </div>

            <div className="flex flex-row space-x-6">
                <div><BsWhatsapp /></div>
                <div><BsInstagram /></div>
                <div><BsTwitter /></div>

            </div>
            <div><hr className='text-gray-600' /></div>

            <div className='text-xs py-6'>
                <p>All rights reserved</p>
            </div>


        </div>
        </>
    )
}


export default Footer;