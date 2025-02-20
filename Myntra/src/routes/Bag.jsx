import React from 'react'
import BagSummary from '../components/BagSummary'
import BagItems from '../components/BagItems';
import { useSelector } from 'react-redux';

const Bag = () => {

 const bagitems=  useSelector(store=>store.Bag)
 const maintems=  useSelector(store=>store.items)
 const finalitems=maintems.filter(items=>bagitems.includes(items.id))
console.log(finalitems)


const TotalPrice = finalitems.reduce((total, item) => total + item.original_price, 0);
const TotalDiscounted = Math.round(TotalPrice * 0.2)/100;

const Summary = {
  Noofitems: finalitems.length,
  TotalPrice: TotalPrice,
  TotalDiscounted: TotalDiscounted,
  final: TotalPrice - TotalDiscounted, // Final price after discount
};
console.log(Summary)

  return (
    <div>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalitems.length == 0 && <h1>Nothing in the bag</h1>}
           {finalitems.map(items=> <BagItems key={items.id} items={items}></BagItems>)}
          </div>
          <div className="bag-summary">
      <BagSummary  summary={Summary} />
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default Bag;
