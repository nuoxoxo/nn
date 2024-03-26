import React, { useState } from "react"
import Notification from "./Notification"
import { SnackbarProvider, useSnackbar } from "notistack"

const Confirmation = ({ type, message, children, decline, accept }) => {
  // TODO your code here
  type =
    {
      success: "success",
      message: "info",
      caution: "warning",
      error: "danger",
    }[type] || "info"

  const [hidden, setHidden] = useState(false)
  const { enqueueSnackbar } = useSnackbar()

  const handleAccept = () => {
    accept()
    console.log('/hidden', hidden, "ac")
    confirmationDisappears()

    // notistack
    enqueueSnackbar(
      'Accepted', // 1st arg: Message
      { // 2nd arg: specification
        variant: "success",
        autoHideDuration: 3000,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        },
      },
    )
  }

  const handleDecline = () => {
    decline()
    console.log('/hidden', hidden, "dc")
    confirmationDisappears()
    console.log('/hidden/after disappear', hidden, "dc")

    // notistack
    enqueueSnackbar(
      'Declined', // 1st arg: Message             
      { // 2nd arg: specification
        variant: "warning",
        autoHideDuration: 3000,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right"
        },
      },
    )
  }

  const confirmationDisappears = () => {
    if (!hidden) setHidden(true)
    console.log('/hidden setter', hidden)
  }

  const handleDemoReset = () => {
    setHidden(false)
  }

  return (

    <>
      {/* {hidden ? null : ( // Original */}
      {hidden ? (
        <button className="btn btn-primary" onClick={handleDemoReset}>
          Go Back / Restart Demo
        </button>
      ) : (
        
        <Notification
          type={type}
          message={message}
          style={{ display: "flex", flexDirection: "column" }}
        >
          {children}
          <button className="btn btn-primary" onClick={handleAccept}>Yes</button>
          <button className="btn btn-danger" onClick={handleDecline}>No</button>
        </Notification>
      )}
    </>
  )
}
// export default Notification
export default Confirmation
