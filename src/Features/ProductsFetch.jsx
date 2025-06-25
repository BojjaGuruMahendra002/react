import axios from "axios";
import { useEffect, useState } from "react";

export const ProductsFetch = () => {
  const [data, setData] = useState([]);

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

  return (
    <>
  
     <div style={{
		display:'flex',
		flexWrap:'wrap',
		justifyContent:'center',
   
		
	 }}>
        {data.map(product => (
          <div style={{border:'1px solid black'	,
            width:'350px',
			      height:'500px',
			      justifyItems:'center',
            margin:'20px',
            borderRadius:'10px',
		  }}>
		  <img src={product.thumbnail} alt="images"width={300} height={200} />
		  <div>
        <p className="m-2"><b>title:</b>{product.title}</p>
			<p className="m-2"><b>Description:</b>{product.description.slice(0,50)}....</p>
			<p className="m-2"><b>price:</b>${product.price}</p>
		  </div>
		  
		  <button className="border-1 px-4 py-2 bg-blue-500 rounded-2xl ">Add To cart</button>
		  <button className="border-1 mx-3 px-4 py-2 bg-blue-500 rounded-2xl" > Details</button>
	</div>

        ))}
		</div>
   
    </>
  );
};
