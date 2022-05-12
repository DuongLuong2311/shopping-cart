import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
    changed: false,
    totalPrice: 0
  },
  reducers: {
      // Hiện tại dữ liệu giỏ hàng đang rỗng
    // lấy dữ liệu và update content trong giỏ hàng
    replaceData (state, action) {
      state.totalQuantity = action.payload.totalPrice
      state.itemsList =  action.payload.itemsList
    },

    //Thêm vào giỏ
    addToCart (state, action) {
      state.changed = true
      const newItem = action.payload

      //Kiểm tra nếu sản phẩm trong giỏ hàng tồn tại
      const existingItem = state.itemsList.find(item => item.id === newItem.id);
      if(existingItem) {
        existingItem.quantity++
        existingItem.totalPrice += newItem.price
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name
        })
        state.totalQuantity++
      }

    },
    // Xóa khỏi giỏ
    removeFromCart (state, action) {
      state.changed = true
      const id = action.payload
      const existingItem = state.itemsList.find(item => item.id === id)

      if(existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter(item => item.id !== id)
        state.totalQuantity--
      } else {
        existingItem.quantity--
        existingItem.totalPrice -= existingItem.price
      }
    },

    // Hiện giỏ hàng
    setShowCart (state) {
      state.showCart = !state.showCart
    },
  },
})


export const cartActions = cartSlice.actions

export default cartSlice