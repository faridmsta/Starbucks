import React, { useContext, useEffect, useState } from 'react';
import DataBasket from './Context/DataBasket';
import './Basket.css'
import { IoChevronBack } from "react-icons/io5";
import Footerbsk from './Footerbsk'
import { FaChevronDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { GoPencil } from "react-icons/go";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { SiStarbucks } from "react-icons/si";
function Basket() {

  const [data, setData] = useState([])
  const [bskData, setBskData] = useState([])
  const basketData = useContext(DataBasket)
  console.log(basketData.mainBasket)


  useEffect(() => {

    setBskData(basketData.mainBasket);

  }, [bskData, basketData.mainBasket]);


  function plusData(inx) {

    const updatedBasket = [...basketData.mainBasket];
    updatedBasket.push(basketData.mainBasket[inx]);
    basketData.setMainBasket(updatedBasket);

  }

  function minusData(inx) {
    const updatedBasket = [...basketData.mainBasket];
    updatedBasket.splice(inx, 1);
    basketData.setMainBasket(updatedBasket);
  }

  function edit(inx) {
    minusData(inx)

  }

  return (
    <div>
      <div className="reviewOrder">
        <div className="reviewOrderWrap">
          <div className="head">
            <div className="toback">
              <Link to='/menu' >
                <div className="logo">
                  <SiStarbucks />
                </div>
                <div className="text">
                  <IoChevronBack />
                  <p>Back to menu</p>
                </div>
              </Link>
            </div>

            <div className="headAndSt">
              <h1>Review Order ({basketData.mainBasket.length})</h1>
              <div className="foritem">
                <Link to='/store-locator'>
                  <p>Pick up store</p>
                  <h3>No available store</h3>
                </Link>
                <FaChevronDown />

              </div>
            </div>
          </div>
          <div className="body">
            <div className="allCardWrap">
              {bskData.map((item, index) => {
                return (
                  <div className='cardItself'>
                    <div className="image">
                      <img src={item.data.img} alt="" />
                    </div>
                    <div className="cardInfo">
                      <h3>{item.data.name}</h3>
                      <p>{item.size}</p>
                      <p>200★ item</p>
                      <div className="buttons">
                        <Link onClick={()=>{edit(index)}} to={`/menu/${item.link[0]}/${item.link[1]}/${item.link[2]}`}>
                          <GoPencil />
                        </Link>

                        <div className="addOrRem">
                          <CiCircleMinus onClick={() => { minusData(index) }} />
                          <CiCirclePlus onClick={() => { plusData(index) }} />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <Footerbsk />
          </div>
        </div>
      </div>
    </div>
  )

}



export default Basket