import React, { } from 'react';
import { useState } from 'react';
import ItemList from './ItemList';

const productos = [
    {
      id:"1",
      name:"keyboard",
      descrption:"Keyboard description",
      stock: 5,
      img:"https://m.media-amazon.com/images/I/61vjNMgYGLL._AC_SX425_.jpg"
    },
    {
      id:"2",
      name:"mouse",
      descrption:"Mouse description",
      stock: 6,
      img: "https://diginet.com.uy/wp-content/uploads/2022/03/61UxfXTUyvL._AC_SL1500_.jpg"
    }
  ];



const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([]);

    const productList = new Promise((resolve) => 
    setTimeout(() => {
        resolve (productos);
    }, 3000)
    );

    productList.then((data) => setProducts(data))

    return (
        <div>
          <ItemList products={products} />
        </div>
    );
};


export default ItemListContainer;