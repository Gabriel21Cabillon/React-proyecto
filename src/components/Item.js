const Item = ({producto}) => {
    return (
        <div>
        <img src={producto.img} className="w-20 h-20" />
        <li>{producto.name}</li>
      </div>
    );
};

export default Item;