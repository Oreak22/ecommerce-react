import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import visa from "../asset/img/Frame 834.png";
import PaystackPop from "@paystack/inline-js";
import axios from "axios";
const Cashout = () => {
	const popup = new PaystackPop();
	const [email, setemail] = useState();
	const store = useSelector((state) => state.globalReducer.newCart);
	const [myOrder, setmyOrder] = useState(store);
	// form input
	const [steetAdrees, setsteetAdrees] = useState();
	const [phoneNumber, setphoneNumber] = useState();
	const [city, setcity] = useState();
	const [name, setname] = useState();
	const [billingAuth, setbillingAuth] = useState(false);
	//
	const navigate = useNavigate();
	const getSearchParam = () => {
		const param = new URLSearchParams(window.location.search);
		const queryParam = {};
		for (const [key, value] of param.entries()) {
			queryParam[key] = value;
		}
		return queryParam;
	};
	const subtotal = myOrder.reduce(
		(accumulator, current) =>
			accumulator + current.productPrice * current.orderQuantity,
		0,
	);
	const placeOrder = async () => {
		// setbillingData()
		const billingData = { email, steetAdrees, city, name, phoneNumber };
		console.log(billingData);
		axios.get("https://ecommerceserver24.vercel.app/payment/gateway").then((response) => {
			console.log(response.data.data.access_code);
			popup.resumeTransaction(response.data.data.access_code)
		});
	};
	const back2cart = () => {
		navigate("/mycart");
	};
	useEffect(() => {
		console.log("check");
		if (
			getSearchParam()._id !== JSON.parse(localStorage.exclusive).account_id
		) {
			navigate("/*");
		}
		if (email && steetAdrees && city && name && phoneNumber) {
			setbillingAuth(true);
		} else {
			setbillingAuth(false);
		}
	}, [email, steetAdrees, city, name, phoneNumber]);

	return (
		<>
			<Navbar />
			<div className='container xl py-2 py-md-3'>
				<button
					className='btn btn-outline-dark btn-bg rounnded rounded-pill my-3'
					onClick={back2cart}
				>
					<i className='bi bi-arrow-left'></i>
				</button>
				<div className='row justify-content-center justify-content-lg-between'>
					{/* form */}
					<div className='col-11 col-lg-6'>
						<div className='row'>
							<div className='col-12 col-lg-10'>
								<div className='mx-auto'>
									<h3 className='display-6 fw-bold'>Billing Details</h3>
									<div>
										<div class='mb-3'>
											<label for='firstName' class='form-label'>
												Name*
											</label>
											<input
												type='text'
												class='form-control b-blue py-lg-3'
												id='firstName'
												value={name}
												onChange={(e) => setname(e.target.value)}
											/>
										</div>

										<div class='mb-3'>
											<label for='Street-Address' class='form-label'>
												Street Address*
											</label>
											<input
												type='text'
												class='form-control b-blue py-lg-3'
												id='Street-Address'
												value={steetAdrees}
												onChange={(e) => setsteetAdrees(e.target.value)}
											/>
										</div>

										<div class='mb-3'>
											<label for='town' class='form-label'>
												Town/City*
											</label>
											<input
												type='text'
												class='form-control b-blue py-lg-3'
												id='town'
												value={city}
												onChange={(e) => setcity(e.target.value)}
											/>
										</div>

										<div class='mb-3'>
											<label for='phoneNumber' class='form-label'>
												Phone Number*
											</label>
											<input
												type='tel'
												class='form-control b-blue py-lg-3'
												id='phoneNumber'
												value={phoneNumber}
												onChange={(e) => setphoneNumber(e.target.value)}
											/>
										</div>

										<div class='mb-3'>
											<label for='email' class='form-label'>
												Email address*
											</label>
											<input
												type='email'
												class='form-control b-blue py-lg-3'
												id='email'
												value={email}
												onChange={(e) => setemail(e.target.value)}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='col-11 col-lg-6' style={{ height: "100%" }}>
						<h3 className='display-6 fw-bold'>Order Summary</h3>
						<div className='row' style={{ height: "100%" }}>
							<div
								className='col-lg-10 '
								style={{ height: "10rem", overflowY: "scroll" }}
							>
								{myOrder.map((items, index) => {
									return (
										<div
											key={index}
											className='d-flex py-3 my-1 border-bottom border-dark align-items-center justify-content-between'
										>
											<div className='d-flex align-items-center justify-content-between'>
												<img src={items.productPic} alt='' width={"40rem"} />
												<h6
													className=' ms-4'
													title={items.productName}
													style={{
														width: "10rem",
														overflowX: "hidden",
														textWrap: "nowrap",
													}}
												>
													{items.productName}
												</h6>
											</div>
											<h6 className='align-self-end'>{items.productPrice}</h6>
										</div>
									);
								})}
							</div>
							{/*  */}
							<div className='mt-3 mx-auto ' style={{ width: "90%" }}>
								<div
									className='py-2 my-1 border-bottom border-dark d-flex justify-content-between'
									style={{ width: "80%" }}
								>
									<p>Subtotal</p>
									<p>{subtotal}</p>
								</div>
								<div
									className='py-2 my-1 border-bottom border-dark d-flex justify-content-between'
									style={{ width: "80%" }}
								>
									<p>Shipping</p>
									<p>Free</p>
								</div>
								<div
									className='py-2 my-1 border-bottom border-dark d-flex justify-content-between'
									style={{ width: "80%" }}
								>
									<p>Total</p>
									<p>{subtotal}</p>
								</div>
								<div className='mt-3'>
									<div className='fs-6 mb-2 d-flex'>
										<input
											type='radio'
											id='bankPayment'
											name='paymentOption'
											width='2rem'
											class='form-check-input bg-dark'
											onClick={(e) => console.log([e.target.value])}
											checked
										/>
										<label
											for='bankPayment'
											className='ms-3 d-flex justify-content-between align-items-center'
											style={{ width: "80%" }}
										>
											<span>
												{" "}
												<div>Bank</div>
											</span>{" "}
											<img src={visa} alt='' />
										</label>
									</div>
									<div className='fs-6 mb-2 d-flex'>
										<input
											type='radio'
											id='payOnDelivary'
											name='paymentOption'
											width={"100%"}
											class='form-check-input bg-dark'
											onClick={(e) => console.log([e.target.value])}
										/>
										<label for='payOnDelivary' className='ms-3'>
											Pay on delivery
										</label>
									</div>
									<div
										className='mt-4'
										style={{ width: "80%", transitionDuration: "1s" }}
									>
										<button
											className='btn btn-dark w-100 b-red'
											disabled={!billingAuth ? true : false}
											title={!billingAuth ? "Please fill the billing" : " "}
											onClick={placeOrder}
										>
											Place Order
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Cashout;
