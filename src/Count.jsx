import React from 'react'
import {useSelector } from 'react-redux';
import {getItemSelector} from './redux/slice/cartSlice'


const Count = () => {
    // const count = useSelector((state) => state)
    const count = useSelector(getItemSelector);
    console.log("count",count) 
    const totalPrice = count.reduce((a,b) => a + b.price, 0);
    return (
        <div>
            <h1>Cart : {count.length}, Price: Rs.{totalPrice}/-</h1>
        </div>
    )
}

export default Count;
