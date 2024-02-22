import React, { useContext } from 'react';
import DataBasket from './Context/DataBasket';


function Basket() {

  const basketData=useContext(DataBasket)
  console.log(basketData.mainBasket)
 
  return (
    <div>

    </div>
  )

}



export default Basket