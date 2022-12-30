import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon, CartState } from '../interfaces/interfaces';


const initialState: CartState = {
    cartItems: [
        {
            id: '25',
            name: 'pikachu',
            quantity: 1
        },
        {
            id: '7',
            name: 'squartle',
            quantity: 3
        }
        ],
        cartClicked: false,
        cartCount: 0
    }

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state: CartState, action: PayloadAction<Pokemon> ) =>{
            const itemExists = state.cartItems.some((item:Pokemon) => item.name === action.payload.name);
            
            
                if (itemExists) {
                    const newValue = state.cartItems.map((item:Pokemon) => 
                        item.name === action.payload.name ? { ...item, quantity: item.quantity + 1} : item
                    );
                    
                    return{
                        ...state,
                        cartItems: [...newValue]
                        
                    }
                }
                else {
                    return{
                        ...state,
                        cartItems: [...state.cartItems, action.payload]
                        
                    }
                }
        },
        cartCount: (state: CartState) => {
            
            const count = state.cartItems.reduce((total,item) =>  total + item.quantity,0);
            return {...state, cartCount: count} },
        toggleCart: (state: CartState, action:PayloadAction<boolean>) => { return {...state, cartClicked: action.payload}}
    }
})


export const {addToCart, cartCount, toggleCart} = cartSlice.actions
