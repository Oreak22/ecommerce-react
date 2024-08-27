import { createSlice } from "@reduxjs/toolkit";
import dPic1 from '../asset/img/dTV.png'
import dPic2 from '../asset/img/dcontroller.png'
// wishlist pic_placeholder
import dummyl1 from '../asset/img/dwish1.png'
import dummyl2 from '../asset/img/dwish2.png'
import dummyl3 from '../asset/img/dwish3.png'
import dummyl4 from '../asset/img/dwish3.png'

export const dataSlice = createSlice({
    name:"ecommerceGlobalData",
    initialState:{
        cart:[{
            'cart_img': dPic1,
            'cart_name':'LCD Monitor',
            'cart_pp': 650,
            'cart_qauntity':1,
            'shipping':100,
            'product_id': 1
        },
        {
            'cart_img': dPic2,
            'cart_name':'H1 Gamepad',
            'cart_pp': 550,
            'cart_qauntity':2,
            'shipping':100,
            'product_id': 2
        }],
        wishlist:[{
            'cart_img': dummyl1,
            'cart_name':'Gucci duffle bag',
            'cart_pp': 1160,
            'discount':35,
            'cart_qauntity':2,
            'shipping':100,
            'product_id': 2
        },
        {
            'cart_img': dummyl2,
            'cart_name':'RGB liquid CPU Cooler',
            'cart_pp': 1960,
            'discount':0,
            'cart_qauntity':2,
            'shipping':100,
            'product_id': 2
        },
        {
            'cart_img': dummyl3,
            'cart_name':'GP11 Shooter USB Gamepad',
            'cart_pp': 550,
            'discount':0,
            'cart_qauntity':2,
            'shipping':100,
            'product_id': 2
        },
        {
            'cart_img': dummyl4,
            'cart_name':'Quilted Satin Jacket',
            'cart_pp': 750,
            'discount':0,
            'cart_qauntity':2,
            'shipping':100,
            'product_id': 2
        }],
        value:0
    },
    reducers: {
        // cart handling
        push2Cart:(state, action)=>{
            const exsting = state.cart.findIndex( (item) => item.product_id === action.payload.product_id)
            if(exsting<0){
                state.cart.push(action.payload)
            }else{
                state.cart[exsting].cart_qauntity += 1
            }
        },
        deleteFromCart:(state, action)=>{
            // const exsting = state.cart.filter( (item) => item.product_id === action.payload.product_id)
            state.cart.splice(action.payload,1)
        },
        increasePurchase:(state,action)=>{
            state.cart[action.payload].cart_qauntity += 1
        },
        decreasePurchase:(state,action)=>{
            if(state.cart[action.payload].cart_qauntity <= 1){
                return
            }else{
                state.cart[action.payload].cart_qauntity -= 1
            }
        },
        // wishlist handling
        push2Wishlist:(state, action)=>{
            state.wishlist.push(action.payload)
        },

    }
})

export const {push2Cart,increasePurchase,decreasePurchase,push2Wishlist,deleteFromCart} = dataSlice.actions 
export default dataSlice.reducer