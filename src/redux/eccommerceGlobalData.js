import { createSlice } from "@reduxjs/toolkit";
import dPic1 from "../asset/img/dTV.png";
import axios from "axios";
const trigerUpdate = async ({ input, _id }) => {
	let restatus;
	await axios
		.post("https://ecommerceserver24.vercel.app/order/updateorder", {
			orderQuantity: input,
			productId: _id,
		})
		.then((res) => {
			if (res.data.status) {
				// state.newCart[action.payload].orderQuantity -= 1
				restatus = true;
			} else {
				restatus = false;
			}
		});
	console.log(restatus);
	return restatus;
};

export const dataSlice = createSlice({
	name: "ecommerceGlobalData",
	initialState: {
		cart: [],
		newWishlist: [],
		newCart: [],
		value: 0,
	},
	reducers: {
		// cart handling
		push2Cart: (state, action) => {
			const exsting = state.cart.findIndex(
				(item) => item.product_id === action.payload.product_id,
			);
			if (exsting < 0) {
				state.cart.push(action.payload);
			} else {
				state.cart[exsting].orderQuantity += 1;
			}
		},
		deleteFromCart: (state, action) => {
			// const exsting = state.cart.filter( (item) => item.product_id === action.payload.product_id)
			state.newCart.splice(action.payload, 1);
		},
		deleteFromWishlist: (state, action) => {
			// const exsting = state.cart.filter( (item) => item.product_id === action.payload.product_id)
			state.newWishlist.splice(action.payload, 1);
		},
		increasePurchase: (state, action) => {
			// axios.post('http://localhost:5000/order/updateorder',{orderQuantity:(state.newCart[action.payload].orderQuantity + 1),productId:state.newCart[action.payload]._id}).then((res)=>{
			//     if(res.data.status){
			//         console.log(res)
			//         state.newCart[action.payload].orderQuantity += 1
			//         // update()
			//     }
			// })
			const _id = state.newCart[action.payload]._id;
			const input = state.newCart[action.payload].orderQuantity + 1;
			const ifItDid = trigerUpdate({ input, _id });
			console.log(ifItDid);
			if (ifItDid) {
				state.newCart[action.payload].orderQuantity += 1;
			}
		},
		decreasePurchase: (state, action) => {
			if (state.newCart[action.payload].orderQuantity <= 1) {
				return;
			} else {
				const _id = state.newCart[action.payload]._id;
				const input = state.newCart[action.payload].orderQuantity - 1;
				const ifItDid = trigerUpdate({ input, _id });
				console.log(ifItDid);
				if (ifItDid) {
					state.newCart[action.payload].orderQuantity -= 1;
				}
			}
		},
		// wishlist handling
		push2Wishlist: (state, action) => {
			state.wishlist.push(action.payload);
		},
		getWishlist: (state, action) => {
			state.newWishlist = action.payload.wishlisted;
			state.newCart = action.payload.inCart;
			console.log(state.newWishlist);
			// action.payload.map((item,index)=>{
			//     state.newWishlist.push(item)
			//     console.log(item)
			// })
		},
	},
});

export const {
	push2Cart,
	increasePurchase,
	decreasePurchase,
	push2Wishlist,
	deleteFromCart,
	getWishlist,
	deleteFromWishlist,
} = dataSlice.actions;
export default dataSlice.reducer;
