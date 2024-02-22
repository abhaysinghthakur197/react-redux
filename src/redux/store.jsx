// import { legacy_createStore as createStore } from "redux"


// const reducer = (state = 0, action) => {
//     switch (action.type) {
//         case "increment":
//             return state + 1;
//         case "decrement":
//             return state - 1;
//         default:
//             return state;
//     }
// };

// export const store = createStore(reducer);

// ***** Redux Toolkit **** 

import {ReducerType, configureStore} from '@reduxjs/toolkit'
import cartReducer  from './slice/cartSlice'
export const store = configureStore(
    {
        reducer: {
            cart: cartReducer,
        },
    }
);
