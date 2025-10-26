import React from "react";

function ShowCart ([cart , removeFromCart]){
    return (
        <div>
            <h2>Your Cart</h2>
            {cart.length === 0 ? (
                <p>nothing to show yet , get searching , dont be shy</p>
            ) : (
                cart.map((item)=>(
                    <div key={item.id}>
                        <h3>{item.title}</h3>
                        <p>ksh : {item.price}</p>
                    <button onClick={()=> removeFromCart(item.id)}>REMOVE EVENT</button>
                    </div>
                    
                ))
            )}


        </div>
    )
}
export default ShowCart ;