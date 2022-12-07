import React, { } from 'react';
import { useState } from 'react';
import ItemList from './ItemList';

const productos = [
    {
      id:"1",
      name:"keyboard",
      descrption:"Patricia description",
      stock: 5,
      img:"https://http2.mlstatic.com/D_NQ_NP_666117-MLU31243774272_062019-O.webp"
    },
    {
      id:"2",
      name:"mouse",
      descrption:"Corona description",
      stock: 6,
      img: "https://www.distribuidorabebidas.com.uy/wp-content/uploads/sites/31/2018/01/cerveza_corana_botella_710-510x425.jpg"
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