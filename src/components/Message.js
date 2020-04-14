import React from "react"

const Message = (promps) => {
  return(
    <div>
      <h3>{promps.message.sender}</h3>
      <p>{promps.message.body}</p>
      <p>{promps.message.timeStamp}</p>
    </div>
  )
}

export default Message;
