import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className="navigation">
      <ul>
        <li><Link to="/" className="istocks-link">iStocks</Link></li>
        <li><Link to="/stocks">Stocks</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  );
}

export default Navigation;