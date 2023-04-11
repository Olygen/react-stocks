import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function Price (props) {
  // Our api key from coinapi.io
  const apiKey = process.env.REACR_APP_API_KEY;
  // Grabbing the Currency symbol from the URL Params
  const { symbol } = useParams();
  // Using the other two variables to create our URL
  const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

  const [coin, setCoin] = useState(null)
  const [refresh, setRefresh] = useState(false)

  const getCoin = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setCoin(data)
    } catch (err) {
      console.error(err)
    }
  }
  //to evoce previous function once:
  useEffect(() => {
    getCoin()
  }, [refresh])

  const handleClick = () => {
    setRefresh(!refresh)
  }

  // loaded function for when data is fetched
  const loaded = () => {
    return (
      <div>
        <h1>
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
        <br />
        <button onClick={handleClick}>Refresh</button>
      </div>
    )
  }

  const loading = () => {
    return <h1>Loading...</h1>
  }

  return coin && coin.rate ? loaded() : loading()
};