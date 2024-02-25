import React, { useEffect, useState } from 'react'
import './Footer.css'
import { Link, useLocation } from 'react-router-dom'
import { FaAngleDown } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
    const [aboutUs, setAboutUs] = useState(false)
    const [career, setCareer] = useState(false)
    const [social, setSocial] = useState(false)
    const [business, setBusiness] = useState(false)
    const [order, setOrder] = useState(false)
    const [containerClass, setContainerClass] = useState('container');
    const location = useLocation();

    return (
        <div className={` $ `}>
            <footer>
                <div className={`${containerClass}`}>
                    <div className="footer">
                        <nav>
                            <div className="more">
                                <div className="footerSec">
                                    <div onClick={() => { setAboutUs(!aboutUs) }} className="footSecHead">
                                        <h2 >About us</h2> <FaAngleDown style={{ transform: aboutUs && 'rotate(180deg)' }} />
                                    </div>
                                    <div className={`footSecMore ${aboutUs && 'openFootSecMore'}`}>
                                        <Link>Our Company</Link>
                                        <Link>Our Coffee</Link>
                                        <Link>Stories and News</Link>
                                        <Link>Starbucks Archive</Link>
                                        <Link>Investor Relations</Link>
                                        <Link>Customer Service</Link>
                                        <Link>Contact Us</Link>
                                    </div>
                                </div>
                                <div className="footerSec">
                                    <div onClick={() => { setCareer(!career) }} className="footSecHead">
                                        <h2 >Careers</h2> <FaAngleDown style={{ transform: career && 'rotate(180deg)' }} />
                                    </div>
                                    <div className={`footSecMore ${career && 'openFootSecMore'}`}>
                                        <Link>Culture and Values</Link>
                                        <Link>Inclusion, Diversity, and Equity</Link>
                                        <Link>College Achievement Plan</Link>
                                        <Link>Alumni Community</Link>
                                        <Link>U.S. Careers</Link>
                                        <Link>International Careers</Link>
                                    </div>
                                </div>
                                <div className="footerSec">
                                    <div onClick={() => { setSocial(!social) }} className="footSecHead">
                                        <h2 >Social Impact</h2> <FaAngleDown style={{ transform: social && 'rotate(180deg)' }} />
                                    </div>
                                    <div className={`footSecMore ${social && 'openFootSecMore'}`}>
                                        <Link>People</Link>
                                        <Link>Planet</Link>
                                        <Link>Environmental and Social Impact Reporting</Link>
                                    </div>
                                </div>
                                <div className="footerSec">
                                    <div onClick={() => { setBusiness(!business) }} className="footSecHead">
                                        <h2>For Business Partners</h2> <FaAngleDown style={{ transform: business && 'rotate(180deg)' }} />
                                    </div>
                                    <div className={`footSecMore ${business && 'openFootSecMore'}`}>
                                        <Link>Landlord Support Center</Link>
                                        <Link>Suppliers</Link>
                                        <Link>Corporate Gift Card Sales</Link>
                                        <Link>Office and Foodservice Coffee</Link>
                                    </div>
                                </div>
                                <div className="footerSec">
                                    <div onClick={() => { setOrder(!order) }} className="footSecHead">
                                        <h2 >Order and Pick Up</h2> <FaAngleDown style={{ transform: order && 'rotate(180deg)' }} />
                                    </div>
                                    <div className={`footSecMore ${order && 'openFootSecMore'}`}>
                                        <Link>Order on the App</Link>
                                        <Link>Order on the Web</Link>
                                        <Link>Delivery</Link>
                                        <Link>Order and Pick Up Options</Link>
                                        <Link>Explore and Find Coffee for Home</Link>
                                    </div>
                                </div>

                            </div>
                            <div className="grayline">
                                <hr />
                            </div>
                            <div className="linkIcons">
                                <Link><div className="iconWrapper"><FaSpotify /></div></Link>
                                <Link><div className="iconWrapper"><FaFacebook /></div></Link>
                                <Link><div className="iconWrapper"><FaPinterest /></div></Link>
                                <Link><div className="iconWrapper"><FaInstagram /></div></Link>
                                <Link><div className="iconWrapper"><FaYoutube /></div></Link>
                                <Link><div className="iconWrapper"><FaTwitter /></div></Link>
                            </div>
                            <div className="secondoryLinks">
                                <ul>
                                    <li><Link>Privacy Notice</Link></li><span></span>
                                    <li><Link>Terms of Use</Link></li><span></span>
                                    <li><Link>Do Not Share My Personal Information</Link></li><span></span>
                                    <li><Link>CA Supply Chain Act</Link></li><span></span>
                                    <li><Link>Privacy Notice</Link></li><span></span>
                                    <li><Link>Privacy Notice</Link></li>
                                </ul>
                                <p>© 2024 Starbucks Coffee Company. All rights reserved.</p>
                            </div>
                        </nav>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer