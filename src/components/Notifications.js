import React from 'react'
import { Alert } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../store/uiSlice'

function Notifications({type, message}) {
  
  const dispatch = useDispatch()
  const notification = useSelector(state => state.ui.notification)
  const handleNotificationClose = () => {
    dispatch(
      uiActions.showNotifications({
        open: false
      }) 
    )
  }
  
  return (
    <div>
      { notification.open && <Alert onClose={handleNotificationClose} severity={notification.type}>{notification.message}</Alert> }
    </div>
  )
}

export default Notifications