import React, { useEffect, useState } from 'react'
import './Drower.css'
import { Link, useLocation } from 'react-router-dom';
import { FaChevronDown } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import { IoBag } from "react-icons/io5";

function Drower() {
    const location = useLocation();
    const [avilable, setAvilable] = useState(false)
    useEffect(() => {
        const hasMenu = window.location.pathname.includes('/menu');
        setAvilable(hasMenu ? true : false);
    }, [location]);

    return (
        <div style={{ display: !avilable && 'none' }}>
            <div className="bottomDrower">
                <div className="bottomDrowerWrap">
                    <div className="foritem">
                        <Link to='/store-locator'>
                            <p>for Item avability chose store</p>
                            <p>for Item avability</p>
                            <h3>Chose Store</h3>
                        </Link>
                        <FaChevronDown />
                    </div>
                    <Link to='/menu/basket' >
                        <div className="orderbag">
                            <div className="bags">
                                <IoBagOutline />
                                <IoBag className='hide' />
                            </div>
                            <div className="orderNum">
                                0
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Drower