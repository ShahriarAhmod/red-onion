import React from 'react';
import Home from '../pages/Home.jsx';
import Cart from '../pages/Cart.jsx';
import { FoodCartProvider } from '../context/RedOnionContext'
import {Routes,Route} from 'react-router-dom'
import Login from '../pages/Login.jsx';
import Signup from '../pages/Signup.jsx';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import SingleProductPage from '../pages/SingleProductPage.jsx';

function App() {
	return (
		<FoodCartProvider>
				<ToastContainer ></ToastContainer>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup/>}/>
				<Route path=":id" element={<SingleProductPage />} />

			</Routes>
		</FoodCartProvider>
	);
}

export default App;
