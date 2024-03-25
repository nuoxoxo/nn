import React from "react"
import Notification from "./Notification"

const Confirmation = ({ type, message, children, decline, accept }) => {
  // TODO your code here
  type =
    {
      success: "success",
      message: "info",
      caution: "warning",
      error: "danger",
    }[type] || "info"

  const [hidden, setHidden] = React.useState(false)
  const handleAccept = () => {
    accept()
    console.log(hidden, "ac")
    confirmationDisappears()
  }
  const handleDecline = () => {
    decline()
    console.log(hidden, "dc")
    confirmationDisappears()
    console.log(hidden, "dc")
  }
  const confirmationDisappears = () => {
    if (!hidden) setHidden(true)
    console.log(hidden)
  }

  return (
    <>
      {hidden ? null : (
        <Notification
          type={type}
          message={message}
          style={{ display: "flex", flexDirection: "column" }}
        >
          {children}
          <button className="btn btn-primary" onClick={handleAccept}>
            Yes
          </button>
          <button className="btn btn-danger" onClick={handleDecline}>
            No
          </button>
        </Notification>
      )}
    </>
  )
}
// export default Notification
export default Confirmation
