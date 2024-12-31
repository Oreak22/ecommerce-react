import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import sign_cart from "../asset/img/dl.beatsnoop 1.png";
import googleIcon from "../asset/icons/Icon-Google.svg";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { LoadingContent } from "../components/LoadingState";

const SignUp = () => {
	const navigate = useNavigate();
	const [uname, setname] = useState();
	const [uemail, setemail] = useState();
	const [errMessage, setErrMessage] = useState({ status: false, message: "" });
	const [upassword, setpassword] = useState();
	const { setIsLoading } = useContext(LoadingContent);
	const navg8 = useNavigate();
	let url = "https://ecommerceserver24.vercel.app/user/register";
	const toOtherPage = () => {
		setIsLoading(true);
		console.log("tans");
	};
	const signupuser = () => {
		setIsLoading(true);
		const userdata = { uname, uemail, upassword };
		axios
			.post(url, userdata)
			.then((res) => {
				console.log(res.data);
				if (res.data.status) {
					navg8("/signin");
				} else {
					setErrMessage({ status: true, message: res.data.message });
					setIsLoading(false);
				}
			})
			.catch((err) => {
				console.log(err);
				setIsLoading(false);
			});
	};
	useEffect(() => {
		if (JSON.parse(localStorage.getItem("exclusive"))) {
			navigate("/");
		}
		setIsLoading(false);
	}, []);
	return (
		<>
			<Navbar pageSign={true} />
			<section className='sign-body '>
				<div className='container-lg mt-5'>
					<div className='row justify-content-lg-between justify-content-center align-items-center'>
						<div className='col-lg-7 d-none d-lg-block'>
							<img src={sign_cart} alt='' className='img-fluid' />
						</div>
						<div className='col-lg-4 col-8'>
							<h3 className='h2'>Create an account</h3>
							<h6 className='my-2'>Enter your details below</h6>
							<div className='w-100'>
								<div class='form-floating mb-3'>
									<input
										type='text'
										class='form-control sign-input'
										id='floatingInput'
										placeholder='Name'
										onChange={(e) => {
											setname(e.target.value);
											setErrMessage({ message: "", status: false });
										}}
									/>
									<label for='floatingInput'>Name</label>
								</div>
								<div class='form-floating mb-3'>
									<input
										type='email'
										class='form-control sign-input'
										id='floatingInput'
										placeholder='name@example.com'
										onChange={(e) => {
											setemail(e.target.value);
											setErrMessage({ message: "", status: false });
										}}
									/>
									<label for='floatingInput'>Email address</label>
								</div>
								<div class='form-floating'>
									<input
										type='password'
										class='form-control sign-input'
										id='floatingPassword'
										placeholder='Password'
										onChange={(e) => {
											setpassword(e.target.value);
											setErrMessage({ message: "", status: false });
										}}
									/>
									<label for='floatingPassword'>Create Password</label>
								</div>
							</div>
							{errMessage.status && (
								<div className='alert alert-danger text-center py-2'>
									<small>{errMessage.message}</small>
								</div>
							)}
							<div className='my-4'>
								<button
									className='btn bt-red w-100 py-2 my-1'
									onClick={signupuser}
								>
									Create Account
								</button>
								<button className='btn btn-outline-dark w-100 py-2 my-1 '>
									<i className='me-3'>
										<img src={googleIcon} alt='' />
									</i>
									Sign up with Google
								</button>
							</div>
							<div className='text-center d-flex justify-content-center'>
								<span className='me-3'>Aready have account?</span>{" "}
								<Link
									to='/signin'
									className='active nav-link'
									onClick={toOtherPage}
								>
									<span className=''>Log In</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default SignUp;
