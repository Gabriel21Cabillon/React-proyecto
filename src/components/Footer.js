import React, { } from 'react';
import { useState } from 'react';

function Footer() {

    const [state, setState] = useState("Gabriel Cabillon");

    const cambiarNombre = () => {
        if (state === "Gabriel Cabillon") {
            setState("Gracias por visitarnos!");
        } else {
            setState("Gabriel Cabillon");
        }
    };

    
        return (
        <section>
        <p>{state}</p>
        <button onClick={cambiarNombre}> WOW</button>
        </section>
        );
};

export default Footer;