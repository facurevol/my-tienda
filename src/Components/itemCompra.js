import  React from "react";

const itemCompra = ({ comprado }) => {
    

    if (comprado) {
        return <button >comprado</button>
    } else {
        return <button >nop</button>
    }
}
export default itemCompra;