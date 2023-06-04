import { useState, useEffect } from "react";

function App() {
	const [loading, setLoading] = useState(true);
	const [coins, setCoins] = useState([]);
	const [usd, setUsd] = useState(0);
	const [selectedCoin, setSelectedCoin] = useState(null);
	const [exchange, setExchange] = useState(0);

	const onChange = (e) => {
		setUsd(e.target.value);
	};

	const findCoin = (coin) => {
		const foundCoin = coins.find((c) => c.name === coin);
		return foundCoin;
	};

	const onSelect = (e) => {
		const selectedCoinObj = findCoin(e.target.value.split("(")[0].trim());
		setSelectedCoin(selectedCoinObj);
	};

	useEffect(() => {
		fetch("https://api.coinpaprika.com/v1/tickers?limit=30")
			.then((res) => res.json())
			.then((data) => {
				setCoins(data);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching coins:", error);
			});
	}, []);

	useEffect(() => {
		setUsd(parseInt(usd));
		if (selectedCoin) {
			const priceFloat = parseFloat(parseFloat(selectedCoin.quotes.USD.price));
			setExchange(usd / priceFloat);
		}
	}, [selectedCoin, usd]);

	useEffect(() => {
		if (coins.length > 0) {
			const selectedCoinObj = findCoin(coins[0].name);
			setSelectedCoin(selectedCoinObj);
		}
	}, [coins]);

	return (
		<div>
			<h1>The Coins {loading ? "" : `(${coins.length})`}</h1>
			<input
				onChange={onChange}
				value={usd}
				type="text"
				placeholder="input your USD here"
			/>
			<p>
				You can buy: {exchange} {selectedCoin?.symbol}
			</p>
			<p>Coins will be listed here</p>
			{loading ? (
				<p>Loading...</p>
			) : (
				<select id="" onChange={onSelect}>
					{coins.map((coin) => (
						<option key={coin.id}>
							{coin.name} ({coin.symbol}): {coin.quotes.USD.price}
						</option>
					))}
				</select>
			)}
		</div>
	);
}

export default App;
