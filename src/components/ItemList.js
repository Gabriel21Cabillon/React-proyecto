import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <ul className="">
      {products.map((product) => (
        <Item product={product} />
      ))}
    </ul>
  );
};

export default ItemList;