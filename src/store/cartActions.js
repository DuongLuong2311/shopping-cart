import { cartActions } from "./cartSlice";
import { uiActions } from "./uiSlice";


export const fetchData = () => {
  return async dispatch => {
    const fetchHandler = async () => {
      const res = fetch('https://redux-tutorial-6c8fe-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems.json')
      const data = await res.json()
      return data
    }
    try {
      const cartData = await fetchData();
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
      const res = await fetch('https://redux-tutorial-6c8fe-default-rtdb.asia-southeast1.firebasedatabase.app/cartItems.json', {
        method: 'PUT',
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