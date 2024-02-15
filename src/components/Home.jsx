import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'
import './Home.css'




function Home() {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('https://faridmsta.github.io/starbucksjson/db.json')
        .then(res => res.json())
        .then(res=> setData(res.home) )
    },[])

    return (
        <div>
            <main>
                <div className="container">
                    <div className="main">
                        <div className="homeCards">
                            {data?.map((item, index) => {
                                return (
                                    <div key={index}  className="hCard">
                                        <img src={item.img} alt="" />
                                        <div className="cardInfo" style={{ background: `${item.bgcolor}`, color: `${item.txtcolor}` }} >
                                            <h2>{item.headtext}</h2>
                                            <p>{item.text}</p>
                                            <Link style={{ color: `${item.txtcolor}`, border: `1px solid ${item.txtcolor}` }} >Open the app</Link>
                                        </div>
                                    </div>)
                            })}

                        </div>
                    </div>
                </div>
            </main>
            <section className='AllDateInfos'>
                <div className="container">
                    <div className="infosWrapper">
                        <div className="Infos">
                            <div className="dates">
                                <p>*Triple Star Tuesday:​</p>
                                <p>Offer valid 1/16/24 at participating stores. Must activate this offer to earn triple Stars on transactions made during the offer window. Stars cannot be earned on purchases of alcohol, Starbucks Cards or Starbucks Card reloads.
                                    See <Link href="https://www.starbucks.com/terms">starbucks.com/terms</Link> for details.</p>
                                <p>$3 Thursday:</p>
                                <p>Valid 12-6pm only on 1/18/24 at participating stores on a grande or smaller handcrafted drink. Customizations cost extra. Excludes canned, bottled beverages and alcohol. Valid for one time use. Cannot be combined with other offers or discounts. Excludes delivery services.</p>
                                <p>BOGO Weekend:</p>
                                <p>Valid 12-6pm only on 1/20/24-1/21/24 at participating stores. Buy a handcrafted drink, get one of equal or lesser value for free ($10 max value). Product availability varies by store. Limited to stock on hand. Cannot be combined with other offers or promotions. Excludes delivery services.</p>
                            </div>
                            <p>**Account with Venmo required.</p>
                        </div>
                    </div>
                </div >
            </section >
        </div >
    )
}

export default Home