import Item from "./Item";

const ItemList = ({ products }) => {
    return (
        <ul className="flex items-center justify-center">
          {products.map((product) => (
            <Item product={product} />
          ))}
      </ul>
    );
};

export default ItemList;