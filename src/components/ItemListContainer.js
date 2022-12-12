import React, { useEffect } from 'react';
import { useState } from 'react';
import ItemList from './ItemList';


// mock
import{ item } from "../mocks/item.mock";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

    useEffect(() => {
      new Promise((resolve) =>
      setTimeout(() => {
        resolve(item);
      }, 3000)
    ).then((data) => setProducts(data));
    }, []);
    
    if (products.length === 0) {
      return <p>Loading...</p>;
    }
  
    return (
      <div className="">
        <ItemList products={products} />
      </div>
    );
};
  
  export default ItemListContainer;