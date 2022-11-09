import React, { } from 'react';
import carrito from './img/carrito.png';

const CartWidget = () => {
    return (
        <>
        <img className='carritoLogo' src={carrito} alt="carrito"/>
        </>
    )
}

export default CartWidget;