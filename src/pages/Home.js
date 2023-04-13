// import React from 'react';

// function Home(props) {
//   console.log('This is Home - props', props);
//   return <h1>Most Active Stocks</h1>;
// }

// export default Home;

// import React from 'react';
import stocks from '../data';

function Home() {
  return (
    <div>
      <h1>Most Active Stocks</h1>
      <table>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Price</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr key={stock.symbol}>
              <td>{stock.name}</td>
              <td>{stock.lastPrice}</td>
              <td>{stock.change}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;