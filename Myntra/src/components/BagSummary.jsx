import React from 'react';



const BagSummary = ({ summary }) => {
  return (
    <div>
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({summary.Noofitems})</div>

        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{summary.TotalPrice}</span>
        </div>

        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">-₹{summary.TotalDiscounted}</span>
        </div>

        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>

        <hr />

        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{summary.final}</span>
        </div>
      </div>

      <button className="btn-place-order">PLACE ORDER</button>
    </div>
  );
};

export default BagSummary;
