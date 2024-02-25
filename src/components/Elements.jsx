import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { CiCoffeeCup, CiLocationOn } from "react-icons/ci";
import { SlMagicWand } from "react-icons/sl";
import { IoIosArrowDropdown } from "react-icons/io";
import { nanoid } from 'nanoid';
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import './Elements.css'
import DataBasket from './Context/DataBasket';


function Elements() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [marginofcircle, setMarginofcircle] = useState(6)
    const { sec, nm, drknm } = useParams();
    const [containerClass, setContainerClass] = useState('container');
    const location = useLocation();
    const [basketdt,setBasketdt] = useState([])
    const basketData=useContext(DataBasket)
    useEffect(() => {

        const hasMenu = window.location.pathname.includes('/menu') || window.location.pathname.includes('/gift');
        setContainerClass(hasMenu ? '' : 'container');

    }, [location]);

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
            
            console.log(data);
            
    }, []);

    {

        data[sec]?.find((item) => item.name == nm).more
            .map((item) => item.name == drknm && setData(item))
    }


    function counter(standart) {
        let number = standart
        function calc(p) {
            let pelem = document.querySelector(".pnumber")
            number += p
            pelem.innerHTML = number;
        }

        return (
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }} className="counterWrap" >
                <div style={{ color: "#107e55", fontSize: "25px" }} onClick={() => calc(-1)} className="minus">
                    < CiCircleMinus />
                </div>
                <p className='pnumber'>
                    {standart}
                </p>
                <div style={{ color: "#107e55", fontSize: "25px" }} onClick={() => calc(1)} className="plus">
                    < CiCirclePlus />
                </div>
            </div>

        )
    }

    function cupSizeValue() {
        marginofcircle
        if (marginofcircle==6) return 'Short'
        else if (marginofcircle==78) return 'Tall'
        else if (marginofcircle==150) return 'Grande'
        else return 'Venti'
    }

    

    function dataToCard() {
        let selectlist =document.querySelectorAll('.selectsOfproduct')
        let inputlist =document.querySelectorAll('.pnumber')
        let selectlistData =[]
        let inputlistData =[]
        
        for (let i of selectlist){
            
            selectlistData.push(i.value)
        }
        for (let i of inputlist){
            
            inputlistData.push(Number(i.innerText))
        }

        basketData.setMainBasket(prevData => ([
            ...prevData,
            {
                data: data,
                size: cupSizeValue(),
                inger: selectlistData,
                extracounts: inputlistData,
                link:[sec, nm, drknm]
            }
        ]));

        
    }
    
    if (loading) {
        return (
            <div>
                loading
            </div>);
    }
    return (
        
        <div>
            <section className="element">

                <p>
                    <div className={`${containerClass}`}>
                        <Link to='/menu'>Menu/</Link> <Link to={`/menu/${sec}/${nm}`}>{nm}/</Link> <span>{drknm}</span>
                    </div>
                </p>

                <div className="productPhoto">
                    <div className={`con ${containerClass}`}>

                        <div className="photo">
                            <img src={data.img} alt="" />
                        </div>
                        <div className="content">
                            <h1>{data.name}</h1>
                            <div className="calo">
                                <span>{data.calories}</span><span>calories</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="adjustSettings">
                    <div className="sizeoptions">
                        <h2>Size options
                            <span></span>
                        </h2>
                        <div className="cupsSec">

                            <div className="cups">
                                <div style={{ marginLeft: `${marginofcircle}px` }} className="activeCircle">

                                </div>

                                <div onClick={() => setMarginofcircle(6)} className="cup">
                                    <div className="cupSvg">
                                        <CiCoffeeCup />
                                    </div>
                                    <p>Short</p>
                                    <p>8 fl oz</p>
                                </div>
                                <div onClick={() => setMarginofcircle(78)} className="cup">
                                    <div className="cupSvg">
                                        <CiCoffeeCup />
                                    </div>
                                    <p>Tall</p>
                                    <p>12 fl oz</p>
                                </div>
                                <div onClick={() => setMarginofcircle(150)} className="cup">
                                    <div className="cupSvg">
                                        <CiCoffeeCup />
                                    </div>
                                    <p>Grande</p>
                                    <p>16 fl oz</p>
                                </div>
                                <div onClick={() => setMarginofcircle(222)} className="cup">
                                    <div className="cupSvg">
                                        <CiCoffeeCup />
                                    </div>
                                    <p>Venti</p>
                                    <p>20 fl oz</p>
                                </div>
                            </div>
                        </div>
                        <div className="choseLocation">
                            <Link>
                                <CiLocationOn /> <span>Select a store to view availability</span>
                            </Link>
                        </div>
                    </div>
                    <div className="selectsec">
                        <h2>What's included
                            <span></span>
                        </h2>
                        <div className="selects">
                            {data?.section?.map((item,index) => {

                                if (item.type == 'normal') {
                                    return (
                                        <div id='select' key={nanoid()}>
                                            <label htmlFor={item.name}>{item.name.slice(0, 1).toUpperCase() + item.name.slice(1)}</label>
                                            <div className="dropdownIcon">
                                                <IoIosArrowDropdown />
                                            </div>
                                            <select className='selectsOfproduct' name="type" id={`${item.name}${index}`}>
                                                {item.options.map((item) => {
                                                    return <option key={nanoid()} value={item}>{item}</option>
                                                })}
                                            </select>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div id='input' key={nanoid()} >
                                            <label htmlFor={item.name}>{item.name.slice(0, 1).toUpperCase() + item.name.slice(1)}</label>

                                            <div className="inputCount">
                                                <p>{item.consept}</p> {counter(item.value)}
                                            </div>
                                        </div>
                                    )
                                }
                            })}


                        </div>
                        <div className="advanced">
                            <button >
                                <SlMagicWand /> <span >Customize</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="confirmOrder">
                <button onClick={dataToCard}>
                    Add to Order
                </button>
            </div>
        </div>
        
    )
}

export default Elements