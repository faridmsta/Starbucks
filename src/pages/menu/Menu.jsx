import React, { useContext, useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Menu.css'
import { nanoid } from 'nanoid'
import menudrink1 from './../../assets/img/drink1.jpg'
import menudrink2 from './../../assets/img/drink2.jpg'
import menudrink3 from './../../assets/img/drink3.jpg'
import menudrink4 from './../../assets/img/drink4.jpg'
import menudrink5 from './../../assets/img/drink5.jpg'
import menudrink6 from './../../assets/img/drink6.jpg'
import menudrink7 from './../../assets/img/drink7.jpg'

import menufood1 from './../../assets/img/food1.jpg'
import menufood2 from './../../assets/img/food2.jpg'
import menufood3 from './../../assets/img/food3.jpg'
import menufood4 from './../../assets/img/food4.jpg'
import menufood5 from './../../assets/img/food5.jpg'

import menuathome1 from './../../assets/img/athome1.jpg'
import menuathome2 from './../../assets/img/athome2.jpg'
import menuathome3 from './../../assets/img/athome3.jpg'

import menumerch1 from './../../assets/img/merch1.jpg'
import menumerch2 from './../../assets/img/merch2.jpg'
import menumerch3 from './../../assets/img/merch3.jpg'
import menumerch4 from './../../assets/img/merch4.jpg'
import DataBasket from './../../components/Context/DataBasket';

const images = [
    [
        menudrink1,
        menudrink2,
        menudrink3,
        menudrink4,
        menudrink5,
        menudrink6,
        menudrink7
    ],
    [
        menufood1,
        menufood2,
        menufood3,
        menufood4,
        menufood5,
    ],
    [
        menuathome1,
        menuathome2,
        menuathome3
    ],
    [
        menumerch1,
        menumerch2,
        menumerch3,
        menumerch4
    ]
]

function Menu() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const basketData = useContext(DataBasket)

    useEffect(() => {

        setData(basketData?.maindb?.menu)
        setLoading(false)

    }, [basketData])

    if (loading) {
        return (
            <div className='Loading'>
                <img src="./src/assets/img/loading.png" alt="" />
            </div>);
    }
    return (
        <div>
            <div className="headerinMenu">
                <div className="headerinMenuWrap">
                    <NavLink to='/menu'>Menu <span></span></NavLink>
                    <NavLink to='/features'>Featured <span></span></NavLink>
                    <NavLink to='/prev'>Previous <span></span></NavLink>
                    <NavLink to='/favorites'>Favorites <span></span></NavLink>
                </div>
            </div>
            <section className="menu">
                <div>
                    <div className="menuWrap">
                        <div className="menuWithText">
                            {Object?.keys(data)?.map((itm, index) => {
                                return (
                                    <div key={index} className="menuTextSec">
                                        <div className="menuHead">
                                            <h2>{itm.slice(0, 1).toUpperCase() + itm.slice(1)}</h2>
                                        </div>
                                        <div className="products">
                                            {data[itm]?.map((item, index) => {

                                                return (
                                                    <Link to={`/menu/${itm}/${item.name}`} key={nanoid()}>
                                                        <h3>{item.name}</h3>
                                                    </Link>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="menuWithPhotos">
                            <h1>Menu</h1>
                            {Object?.keys(data)?.map((itm, indx) => {
                                return (
                                    <div key={nanoid()} className="MenuSec">
                                        <h2>{itm.slice(0, 1).toUpperCase() + itm.slice(1)}</h2>
                                        <div className="grayline">
                                            <hr />
                                        </div>
                                        <div className="products">
                                            {data[itm]?.map((item, index) => {
                                                return (
                                                    <Link to={`/menu/${itm}/${item.name}`} key={index}>
                                                        <img src={images[indx][index]} alt="" />
                                                        <h3>{item.name}</h3>
                                                    </Link>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default Menu