import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { BagActions } from '../store/BagSlice';


const HomeItem = ({item}) => {

  const [currentState,setState]=useState(false)
  const Dispatch=useDispatch();

const HandleADDtobag = ()=>{
Dispatch(BagActions.addToBag(item.id))
setState(true);
}
const HandleRemove=()=>{
  Dispatch(BagActions.RemoveBag(item.id))
  setState(false)
  console.log("removerd",item)

}



  return (
    
      <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
          {item.rating.stars} ⭐ | ${item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
     {currentState == false ?<button className="btn-add-bag" onClick={HandleADDtobag}>Add to Bag</button>:
     <button className="btn-add-bag" onClick={HandleRemove}>Remove </button>}
    </div>
    
  )
}

export default HomeItem
