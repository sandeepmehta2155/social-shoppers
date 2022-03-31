import React, { useState } from 'react';
import moment from 'moment'

const MessageRight = (props) => {
  const [message, setMessage] = useState(props.message)

  const formatTime = (date) => {
    return moment(date).format('hh:mm')
  }

  return (
    <>
      <div className="chat-bubble" style={{ justifyContent: 'flex-end' }}>
        <div className="bubble-actions">
          <div className="dropdown">
            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink2" data-bs-toggle="dropdown" aria-expanded="false">
              <i className="fas fa-ellipsis-v"></i>
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink2">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>

        </div>
        <div className="bubble-info">
          <span className="sender" style={{ "textAlign": "left" }}>{message.user.name}</span>
          <p>{message.text}</p>
          <span className="timestamp"><i className="fas fa-clock"></i>{formatTime(message.createdAt)}</span>
        </div>
      </div>
    </>
  )
}

export default MessageRight