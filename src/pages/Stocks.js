// import React from "react";

import { useParams } from 'react-router-dom';
import stocks from '../data';

function Stocks() {
  const { symbol } = useParams();
  const stock = stocks.find((s) => s.symbol === symbol);

  return (
    <div className="stocks">
      {/* <h1>Stocks</h1> */}
      {/* <p>{symbol}</p> */}
      <h3>{stock.name} ({stock.symbol})</h3>
      <p>Price: {stock.lastPrice}</p>
    </div>
  );
}

export default Stocks;