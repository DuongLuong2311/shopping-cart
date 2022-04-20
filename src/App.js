import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./main.scss";
import Auth from "./components/Auth";
import Layout from "./components/Layout";

import {
  fetchData
} from './store/cartActions'


export default function App() {
  const dispatch = useDispatch()
  const isLoggingIn = useSelector(state => state.auth.isLoggedIn); 

  useEffect(()=> {
    dispatch(fetchData())
  }, [dispatch])


  return (
    <div className="App">
  
      {!isLoggingIn && <Auth />}
      {isLoggingIn && <Layout />}

    </div>
  );
}

