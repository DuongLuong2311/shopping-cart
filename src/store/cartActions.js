import { cartActions } from "./cartSlice";



//Fetch Data
export const fetchData = () => {
  return async dispatch => {
    const fetchHandler = async () => {
      const res = fetch('http://localhost:5000/products')
      const data = await res.data
      return data
    }
    try {
      const cartData = await fetchHandler();
      dispatch(cartActions.replaceData(cartData))
    }catch (err) {}
  }
}
