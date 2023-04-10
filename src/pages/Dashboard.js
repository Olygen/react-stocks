import { useState } from "react";
import { Link } from 'react-router-dom';
import stocks from '../data';

const Dashboard = () => {
    // const [stockInfo, setStockInfo] = useState(stocks);
    const [stockInfo, ] = useState(stocks);
    console.log(stockInfo)

    return (
        <div className="dashboard">
            {/* Dashboard */}
            <ul>
                {
                    stockInfo.map((stk) => {
                        return (
                        <li> 
                            <Link to={`/stocks/${stk.symbol}`}>
                                {stk.name} ({stk.symbol})
                            </Link></li> 
                        )
                    })
                }
            </ul>
        </div>
    )
};

export default Dashboard;