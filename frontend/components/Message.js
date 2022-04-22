import React from 'react'

import { connect } from 'react-redux'

const mapStatetoProps = state =>{
  console.log(state.infoMessage)
  return{
    message: state.infoMessage
  }
}


 function Message(props) {
 const {message} =props
 console.log(message)

  return <div id="message">Nice job!</div>
}

export default connect(mapStatetoProps)(Message)
