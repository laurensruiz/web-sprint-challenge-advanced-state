import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'
import { inputChange, resetForm } from '../state/action-creators'

export function Form(props) {
console.log(props)
  const{
    //state
    form,
    //method
    inputChange,
    postQuiz


  } = props

  const onChange = evt => {
    const {id, value} = evt.target
    inputChange({id, value})
  }

  const onSubmit = evt => {
    evt.preventDefault();
    postQuiz(form)

  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50}
      value={form.newQuestion} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={onChange} 
      value={form.newTrueAnswer} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} 
      value={form.newFalseAnswer} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button disabled={form.newQuestion.trim().length > 1 && form.newTrueAnswer.trim().length > 1 && form.newFalseAnswer.trim().length > 1? false:true}id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

export default connect(st => st, actionCreators)(Form)
