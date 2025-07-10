import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "./CardContext";
``

export const Products = () => {
  const { addToCart } = useContext(CartContext);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [visibleCount, setVisibleCount] = useState(10);

  const fetching = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products?limit=200');
      setData(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetching();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setVisibleCount((prev) => prev + 10);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProducts = data.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()) ||
    product.description.toLowerCase().includes(search.toLowerCase())
  );

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <>
      <h1 className="text-center text-5xl my-2">Top Products</h1>

      <div className="w-full md:w-1/3 mx-auto mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      <div className="flex flex-wrap justify-center">
        {data.length === 0 ? (
          'Loading...'
        ) : (
          visibleProducts.map((product) => (
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
                <p className="m-2"><b>Title:</b> {product.title.slice(0, 30)}...</p>
                <p className="m-2"><b>Description:</b> {product.description.slice(0, 50)}...</p>
                <p className="m-2"><b>Price:</b> ${product.price}</p>
              </div>
              <button className="border-1 px-4 py-2 bg-blue-500 rounded-2xl text-white" onClick={()=> addToCart(product)}>Add To Cart</button>
              <Link to={`/productdetails/${product.id}`}>
                <button className="border-1 mx-3 px-4 py-2 bg-blue-500 rounded-2xl text-white">Details</button>
              </Link>
            </div>
          ))
        )}
      </div>
    </>
  );
};
