
import { useContext } from "react";
import CartContext from "./CardContext";

export default function Cart() {
  const { cartItems, removeFromCart, total, clearCart } = useContext(CartContext);

  return (
    <>
      <h1 className="text-3xl font-bold mb-4 text-center">Shopping Cart</h1>
      <div className="flex flex-col">
     
        {cartItems.length === 0 ? (
          
         <img src="/src/assets/react.svg" alt="logo" style={{
          width:'200px',
          height:'350px',
          objectFit:'contain',
          alignSelf:'center'
         }} />
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-2">
              <span>{item.title}</span>
              <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-cover "style={{width: '350px', height: '300px'}} />
              <span className="font-semibold">
                ${item.price.toFixed(2)} x {item.quantity}
              </span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-400 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      {cartItems.length > 0 && (
        <>
          <div className="flex justify-between items-center border-t py-2 mt-4">
            <span className="font-bold">Total:</span>
            <span className="font-bold">${total.toFixed(2)}</span>
          </div>
          <button
            onClick={clearCart}
            className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded mt-4"
          >
            Clear Cart
          </button>
        </>
      )}
    </>
  );
}
