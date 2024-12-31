import axios from "axios";

const RemoveWishlist = ({ id }) => {
	const url = "https://ecommerceserver24.vercel.app/order/removeWishlist";
	alert(id);
	const _id = { id: "id" };
	axios
		.post(url, _id)
		.then((res) => {
			console.log(res.data);
		})
		.catch((err) => {
			console.log(err);
			return;
		});
};

export { RemoveWishlist };
