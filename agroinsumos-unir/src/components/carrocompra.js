import React, {useState, useEffect} from "react";

const initialCart = [
  {id: 1, title: "Product", description: "Desc"}
]

function carrocompra() {

  const [cart, setCart] = useState(initialCart);

  const deleteProduct = () => {
    const changeCart = cart.filter(product => product.id !== productId);
    setCart(changedCart);
  };
}

  return (
        <div>
      {cart.map(product => (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <h1>{product.description}</h1>
          <button onClick={() => deleteProduct(product.id)}>
            Eliminar
          </button>
          </div>
      )) }
    </div>
  );

