import React from 'react'
import { connect } from 'react-redux'
import {inputChange, postQuiz} from '../state/action-creators'

export function Form(props) {

  const {newQuestion, trueAnswer, falseAnswer, inputChange, postQuiz} = props;
  const disabled = !(newQuestion.trim().length > 0 && trueAnswer.trim().length > 0 && falseAnswer.trim().length > 0)

  const onChange = evt => {
    const id = evt.target.id;
    const val = evt.target.value;
    const form = {
      'newQuestion': newQuestion,
      'newTrueAnswer': trueAnswer,
      'newFalseAnswer': falseAnswer
    }
    inputChange({
      ...form,
      [id]: val
    });
  }

  const onSubmit = evt => {
      evt.preventDefault();

      postQuiz({
        'question_text': newQuestion,
        'true_answer_text': trueAnswer,
        'false_answer_text': falseAnswer
      })
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" value={newQuestion}/>
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" value={trueAnswer} />
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" value={falseAnswer} />
      <button type="submit" id="submitNewQuizBtn" disabled={disabled}>Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    newQuestion: state.form.newQuestion,
    trueAnswer: state.form.newTrueAnswer,
    falseAnswer: state.form.newFalseAnswer
  }
}

export default connect(mapStateToProps, {inputChange, postQuiz})(Form)
