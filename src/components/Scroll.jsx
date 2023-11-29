import React from 'react'

const Scroll = (props) => {
  return (
    <div style={{overflowY: 'scroll', border: '5px solid #0ccac4', height: '40rem'}}>
      {props.children}
    </div>
  )
}

export default Scroll
