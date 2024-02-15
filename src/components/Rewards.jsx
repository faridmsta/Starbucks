import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Rewards.css'
import star from './img/xl-hero-desktop_2021.webp'
import step1 from './img/getting-started-1.webp'
import step2 from './img/getting-started-2.webp'
import step3 from './img/getting-started-3.webp'

function Rewards() {
    const activeline = document.querySelector('.activeline')
    const product = document.querySelectorAll('.contentWrap .product')
    const [activeLine, setActiveLine] = useState(0);
    function chrate(p) {
        setActiveLine(p);
        for (let i = 0; i < product.length; i++) {
            if (i != p) {
                product[i]?.classList.remove('op100')
                product[i]?.classList.add('op0')
                setTimeout(() => {
                    product[i]?.classList.remove('activepro')
                }, 350)
            }
        }
        setTimeout(()=>{
            product[p]?.classList.add('activepro')
            setTimeout(()=>{
                product[p]?.classList.add('op100')
                product[p]?.classList.remove('op0')
            },350)
        },350)
    }

    return (
        <div>
            <main>
                <div className="joinApp">
                    <div className="container">
                        <div className="joinAppWrap">
                            <h1>Starbucks <span>®</span> Rewards</h1>
                            <Link>Join in the app</Link>
                        </div>
                    </div>
                </div>
                <div className="freeCoffee">
                    <div className="container">
                        <div className="freecofeeWrap">
                            <div className="context">
                                <h2>
                                    FREE COFFEE
                                    <br />
                                    IS A TAP AWAY
                                </h2>
                                <p>Join now to start earning Rewards.</p>
                                <span><button><Link>Join in the app</Link></button></span>
                                <span><button><Link>Join now</Link></button></span>
                                <Link>Or join online</Link>
                                <span>Or<Link>join in the app</Link> for the best experience</span>
                            </div>
                            <img hidden src={star} alt="" />
                        </div>
                    </div>
                </div>
                <div className="getStart">
                    <div className="container">
                        <div className="getStartWrap">
                            <div className="header">
                                <h2>Getting started is easy</h2>
                                <p>Earn Stars and get rewarded in a few easy steps.</p>
                            </div>
                            <div className="steps">
                                <div className="step">
                                    <img src={step1} alt="" />
                                    <div className="context">
                                        <h3>Download the Starbucks® app</h3>
                                        <p><Link>Join in the app</Link> to get access to the full range of Starbucks® Rewards benefits.
                                            You can also <Link>join online</Link>.</p>
                                    </div>
                                </div>
                                <div className="step">
                                    <img src={step2} alt="" />
                                    <div className="context">
                                        <h3>Order and pay how you’d like</h3>
                                        <p>Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways.
                                            <Link>Learn how</Link></p>
                                    </div>
                                </div>
                                <div className="step">
                                    <img src={step3} alt="" />
                                    <div className="context">
                                        <h3>Earn Stars, get Rewards</h3>
                                        <p>As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="favforfree">
                    <div className="head">
                        <div className="container">
                            <div className="headWrap">
                                <h2>Get your favorites for free</h2>
                            </div>
                        </div>
                    </div>
                    <div className="rateings">
                        <div className="container">
                            <div className="rateingsWrap">
                                <div className="reats">
                                    <button onClick={() => { chrate(0) }}>25 <span>★</span> </button>
                                    <button onClick={() => { chrate(1) }}>100 <span>★</span></button>
                                    <button onClick={() => { chrate(2) }}>200 <span>★</span></button>
                                    <button onClick={() => { chrate(3) }}>300 <span>★</span></button>
                                    <button onClick={() => { chrate(4) }}>400 <span>★</span></button>
                                </div>
                                <div className="activeline" style={{ marginLeft: `${activeLine * 20}%` }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div className="container">
                            <div className="contentWrap">
                                <div className="product activepro">
                                    <img src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/025.png" alt="" />
                                    <div className="context">
                                        <h3>Customize your drink</h3>
                                        <p>Make your drink just right with an extra espresso shot, nondairy milk or a dash of your favorite syrup.</p>
                                    </div>
                                </div>
                                <div className="product">
                                    <img src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/100.png" alt="" />
                                    <div className="context">
                                        <h3>Brewed hot or iced coffee or tea, bakery item, packaged snack and more</h3>
                                        <p>Treat yourself to an iced coffee, buttery croissant, bag of chips and more.</p>
                                    </div>
                                </div>
                                <div className="product">
                                    <img src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/200.png" alt="" />
                                    <div className="context">
                                        <h3>Handcrafted drink (Cold Brew, lattes and more) or hot breakfast</h3>
                                        <p>Turn good mornings great with a delicious handcrafted drink of your choice, breakfast sandwich or oatmeal on us.</p>
                                    </div>
                                </div>
                                <div className="product">
                                    <img src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/300.png" alt="" />
                                    <div className="context">
                                        <h3>Sandwich, protein box or at-home coffee</h3>
                                        <p>Enjoy a PM pick-me-up with a lunch sandwich, protein box or a bag of coffee—including Starbucks VIA Instant®.</p>
                                    </div>
                                </div>
                                <div className="product">
                                    <img src="https://www.starbucks.com/weblx/images/rewards/reward-tiers/400.png" alt="" />
                                    <div className="context">
                                        <h3>Select Starbucks® merchandise</h3>
                                        <p>Take home a signature cup, drink tumbler or your choice of coffee merch up to $20.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="endless">
                    <div className="container">
                        <div className="endlessWrap">
                            <div className="endlessHead">
                                <h2>Endless Extra</h2>
                                <p>Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee.</p>
                            </div>
                            <div className="endlessBody">
                                <div className="part">
                                    <img src="https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg" alt="" />
                                    <div className="partText">
                                        <h3>Fun freebies</h3>
                                        <p>Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills.</p>
                                        <Link>Learn more</Link>
                                    </div>
                                </div>
                                <div className="part">
                                    <img src="https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg" alt="" />
                                    <div className="partText">
                                        <h3>Order & pay ahead</h3>
                                        <p>Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores.</p>
                                        <Link>Learn more</Link>
                                    </div>
                                </div>
                                <div className="part">
                                    <img src="https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg" alt="" />
                                    <div className="partText">
                                        <h3>Get to free faster</h3>
                                        <p>Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games.</p>
                                        <Link>Learn more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Rewards