import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
	const [ products, setProducts ] = useState([]);

	useEffect(() => {
		;(async() => {
			const response = await axios.get("/api/products");
			setProducts(response.data);
		})()
	}, []);

	return (
		<div>
			{
				products.length
			}
		</div>
	)
}

export default App
