import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Rewards.css'
import star from './img/xl-hero-desktop_2021.webp'
import step1 from './img/getting-started-1.webp'
import step2 from './img/getting-started-2.webp'
import step3 from './img/getting-started-3.webp'
import metimg1a from './img/1A.png'
import metimg1b from './img/1B.webp'
import metimg2a from './img/2A.png'
import metimg2b from './img/2B.webp'
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
        setTimeout(() => {
            product[p]?.classList.add('activepro')
            setTimeout(() => {
                product[p]?.classList.add('op100')
                product[p]?.classList.remove('op0')
            }, 350)
        }, 350)
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
                <section className="cashOrCard">
                    <div className="container">
                        <div className="cashOrCardWrap">
                            <div className="head">
                                <h2>Cash or card, you earn Stars</h2>
                                <p>No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.</p>
                            </div>
                            <div className="body">
                                <div className="perdollar">
                                    <div className="starinfo">
                                        <p>1★ per dollar</p>
                                        <p>Pay as you go</p>
                                    </div>
                                    <div className="methods">
                                        <div className="method">
                                            <img src={metimg1a} alt="" />
                                            <div className="text">
                                                <h3>Scan and pay separately</h3>
                                                <p>Use cash or credit/debit card at the register.</p>
                                            </div>
                                        </div>
                                        <div className="method">
                                            <img src={metimg1b} alt="" />
                                            <div className="text">
                                                <h3>Save payment in the app</h3>
                                                <p>Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="perdollar">
                                    <div className="starinfo">
                                        <p>2★ per dollar</p>
                                        <p>Add funds in the app</p>
                                    </div>
                                    <div className="methods">
                                        <div className="method">
                                            <img src={metimg2a} alt="" />
                                            <div className="text">
                                                <h3>Preload</h3>
                                                <p>To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.</p>
                                            </div>
                                        </div>
                                        <div className="method">
                                            <img src={metimg2b} alt="" />
                                            <div className="text">
                                                <h3>Register your gift card</h3>
                                                <p>Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="keepRew">
                    <div className="container">
                        
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Rewards