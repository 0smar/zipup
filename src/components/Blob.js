import React from 'react'

class Blob extends React.Component{
  render() {
    return (
      <div className="blob">
        <span className="spin-reverse">
          <div className="large squircle one"></div>
        </span>
        <span className="spin">
          <div className="large circle one"></div>
        </span>
        <span className="pulse">
          <div className="small squircle one"></div>
          <div className="small2 circle five"></div>
        </span>
      </div>
    )
  }
}

export default Blob
