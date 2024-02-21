import React, { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Menu.css'
import { nanoid } from 'nanoid'



function Menu() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://faridmsta.github.io/starbucksjson/db.json')
            .then(res => res.json())
            .then(res => {
                setData(res.menu);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className='Loading'>
                <img src="./src/components/img/loading.png" alt="" />
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
                            {Object.keys(data).map((itm, index) => {
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
                            {Object.keys(data).map((itm, index) => {
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
                                                        <img src={item.img} alt="" />
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