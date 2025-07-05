import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function DetailProduct() {
	const { id } = useParams();
	const [data, setData] = useState({});

	useEffect(() => {
		async function fetching() {
			try {
				const response = await axios.get(`https://dummyjson.com/products/${id}`);
				setData(response.data);
				console.log(response.data);
			} catch (error) {
				console.log("Error fetching product details:", error);
			}
		}
		fetching();
	}, [id]);

	return (
		<div className="p-2">
			<h1 className="text-3xl font-bold mb-4">{data.title}</h1>

			<div className="flex gap-6 mb-2">
				<img
					src={data.images?.[0]}
					alt={data.title}
					className="w-72 h-80 object-cover rounded shadow"
				/>
				<div className="flex flex-col justify-between w-75">
					<p className="text-lg">{data.description}</p>
					<p className="text-xl font-semibold text-green-600 mt-2">${data.price}</p>
					<button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded mt-2 w-max">
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
}
