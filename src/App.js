import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notifications from "./components/Notifications";
import { sendRequestCartData } from "./store/cartActions";
import { uiActions } from "./store/uiSlice";
import {
  fetchData
} from './store/cartActions'

let isFirstRender = true;


export default function App() {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const notification = useSelector((state) => state.ui.notification);
  const isLoggingIn = useSelector(state => state.auth.isLoggedIn); 
  const cartItem = useSelector(state => state.cart.itemsList)

  useEffect(()=> {
    dispatch(fetchData())
  },[])

  useEffect(()=> {

    if (isFirstRender) {
      isFirstRender = false
      return
    }

    if(cart.changed) {
      dispatch(sendRequestCartData(cart))
    }


  }, [cart, dispatch])



  return (
    <div className="App">
      {notification && (
        <Notifications type={notification.type} message={notification.message} />
      )}      
      {!isLoggingIn && <Auth />}
      {isLoggingIn && <Layout />}

    </div>
  );
}

