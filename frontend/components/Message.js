import React from 'react'

import { connect } from 'react-redux'

const mapStatetoProps = state =>{
  return{
    message: state.infoMessage.message
  }
}


 function Message(props) {
 const {message} = props

  return <div id="message">{message}</div>
}

export default connect(mapStatetoProps)(Message)
