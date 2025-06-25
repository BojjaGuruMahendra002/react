import axios from "axios";
import { useEffect, useState } from "react";

export const Products = () => {
  const [data, setData] = useState([]);

  const fetching = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products?limit=100');
      setData(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetching();
  }, []);

  return (
    <>
      <h1 className="text-center text-5xl my-4">Top Products</h1>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {data.map(product => (
          <div
            key={product.id}
            style={{
              border: '1px solid black',
              width: '350px',
              height: '500px',
              margin: '20px',
              borderRadius: '10px',
              padding: '10px',
              boxSizing: 'border-box',
            }}
          >
            <img src={product.thumbnail} alt="product" width={300} height={200} />
            <div>
              <p className="m-2"><b>Title:</b> {product.title.slice(0,30)}...</p>
              <p className="m-2"><b>Description:</b> {product.description.slice(0, 50)}...</p>
              <p className="m-2"><b>Price:</b> ${product.price}</p>
            </div>
            <button className="border-1 px-4 py-2 bg-blue-500 rounded-2xl text-white">Add To Cart</button>
            <button className="border-1 mx-3 px-4 py-2 bg-blue-500 rounded-2xl text-white">Details</button>
          </div>
        ))}
      </div>
    </>
  );
};
