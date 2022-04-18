import { cartActions } from "./cartSlice";
import { uiActions } from "./uiSlice";


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
    }catch (err) {
      dispatch(uiActions.showNotifications({
        type: 'error',
        message: 'Sending Request Failed',
        open: true
      }))
    }
  }
}

export const sendRequestCartData = (cart) => {
  return async (dispatch) => {
    dispatch(uiActions.showNotifications({
      type: 'warning',
      message: 'Sending Request',
      open: true
    })
    )
    const sendRequest = async () => {
      const res = await fetch('http://localhost:5000/products', {
        method: 'GET',
        body: JSON.stringify(cart)
      })
      const data = await res.json()
      dispatch(uiActions.showNotifications({
        type: 'success',
        message: 'Sending Request to DATABASE Successfully',
        open: true
      }))
    }
    try {
      await sendRequest()
    } catch (err) {
      dispatch(uiActions.showNotifications({
        type: 'error',
        message: 'Sending Request Failed',
        open: true
      }))
    }
  }
}