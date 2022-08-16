import { createContext, useContext, useEffect, useState } from 'react';
import { data } from '../database/data';
import { toast } from 'react-toastify';
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	signInWithEmailAndPassword,
	updateProfile,
} from 'firebase/auth';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../Firebase/FirebaseConfig';
import { useNavigate } from 'react-router-dom';

const FoodCartContext = createContext(); //1st create my context

export function useFoodCartContext() {
	return useContext(FoodCartContext);
}

export function FoodCartProvider({ children }) {
	const [foodData, setFoodData] = useState([]);
	const [foodCategories, setFoodCategories] = useState([]);

	// filter food function

	const filterItem = (catItem) => {
		const updateFoodData = data[0].filter(
			(item) => item.categories === catItem,
		);

		setFoodData(updateFoodData);
	};

	useEffect(() => {
		setFoodData(data[0]);
		setFoodCategories([...new Set(data[0].map((item) => item.categories))]);
	}, []);
	// get data from localStorage 
	const getDataFormLocalStorage = () => {
		let list = localStorage.getItem("oder-list")
		if (list) {
			return JSON.parse(localStorage.getItem("oder-list"))
		} else {
			return []
		}
	}
	// get data from localStorage 

	// add to cart function
	const [cartItem, setCartItem] = useState(getDataFormLocalStorage());
	function getItemQuantity(id) {
		return cartItem.find((item) => item.id === id)?.quantity || 0;
	}

	function increaseCartQuantity(id) {
		setCartItem((currItem) => {
			// console.log(currItem);
			if (currItem.find((item) => item.id === id) == null) {
				toast.success("New Product Added",{position:"top-right"})
				return [...currItem, { id, quantity: 1 }];
			} else {
				return currItem.map((item) => {
					if (item.id === id) {
						toast.success("Product Added",{position:"top-right"})
						return { ...item, quantity: item.quantity + 1 };
					} else {
						return item;
					}
				});
			}
		});
	}

	function decreaseCartQuantity(id) {
		setCartItem((currItems) => {
			if (currItems.find((item) => item.id === id)?.quantity === 1) {
				return currItems.filter((item) => item.id !== id);
			} else {
				return currItems.map((item) => {
					if (item.id === id) {
						return { ...item, quantity: item.quantity - 1 };
					} else {
						return item;
					}
				});
			}
		});
	}

	function removeFromCart(id) {
		setCartItem((currItems) => {
			return currItems.filter((item) => item.id !== id);
		});
	}

	function clearCart() {
		setCartItem([]);
	}

	const cartQuantity = cartItem.reduce(
		(quantity, item) => item.quantity + quantity,
		0,
	);
	const total = cartItem.reduce((total,item)=>{
		const product=data[0].find(i=>i.id===item.id)
		return total+ (product?.price||0)*item.quantity
	}, 0)
	const tax=Math.round(total*.15)
	

	// add to cart function

	// show cart

	// firebase authentication
	const navigate = useNavigate();

	const [values, setValues] = useState({
		name: '',
		email: '',
		password: '',
	});
	const [errorMassage, setErrorMassage] = useState('');
	const [submitBtnDisable, setSubmitBtnDisable] = useState(false);
	const [userName, setUserName] = useState('');
	const handleSubmission = () => {
		if (!values.name || !values.email || !values.password) {
			setErrorMassage('Please Fill All The Field Correctly**');
			return;
		}

		setSubmitBtnDisable(true);
		createUserWithEmailAndPassword(auth, values.email, values.password)
			.then(async (res) => {
				setSubmitBtnDisable(false);
				const user = res.user;
				await updateProfile(user, {
					displayName: values.name,
				});

				navigate('/');
			})
			.catch((err) => {
				setSubmitBtnDisable(false);
				setErrorMassage(err.message);
				console.log(err.message);
			});
	};

	// login part
	const [loginValues, setLogValues] = useState({
		email: '',
		password: '',
	});
	const handleSubmissionLogin = () => {
		setErrorMassage("")
		console.log("btn working");
		if (!loginValues.email || !loginValues.password) {
			setErrorMassage('Please Fill All The Field Correctly**');
			return;
		}

		console.log(loginValues);
		setSubmitBtnDisable(true);
		signInWithEmailAndPassword(auth, loginValues.email, loginValues.password)
		.then(async (res) => {
			setSubmitBtnDisable(false);
			const user = res.user;
			navigate('/');
		})
		.catch((err) => {
			setSubmitBtnDisable(false);
			setErrorMassage(err.message);
			console.log(err.message);
		});
	};

	const handleLogout = () => {
		signOut(auth)
			.then((res) => {
				// console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				setUserName(user);
			} else {
				setUserName('');
			}
		});
	}, []);

	// firebase authentication
	// console.log(loginValues);

	// local storage 

	
	useEffect(() => {
		localStorage.setItem("oder-list",JSON.stringify(cartItem))
	},[cartItem])
	// local storage

	

	const contextValue = {
		foodData,
		filterItem,
		foodCategories,
		setFoodData,
		data,
		getItemQuantity,
		increaseCartQuantity,
		cartQuantity,
		cartItem,
		removeFromCart,
		decreaseCartQuantity,
		values,
		setValues,
		handleSubmission,
		errorMassage,
		submitBtnDisable,
		userName,
		setLogValues,
		handleSubmissionLogin,
		handleLogout,
		total,
		tax,
	
	};
	return (
		<FoodCartContext.Provider value={{ contextValue }}>
			{children}
		</FoodCartContext.Provider>
	);
}
