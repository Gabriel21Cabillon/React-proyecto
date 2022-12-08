import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const itemMock = {
  id: "1",
  name: "Stella Artois",
  description: "Stella Artois description",
  price: 600,
  photo: "../img/stella.webp",
};

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  useEffect(() => {
    new Promise((resolve) => setTimeout(() => resolve(itemMock), 2000)).then(
      (data) => setItem(data)
    );
  }, []);

  if (!item) {
    return <p>Loading...</p>;
  }

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;