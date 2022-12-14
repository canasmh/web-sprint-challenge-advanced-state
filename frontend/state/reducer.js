// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE} from "./action-types"

const initialWheelState = 0
function wheel(state = initialWheelState, action) {

  switch(action.type) {
    case (MOVE_CLOCKWISE): {
      return (state + 1) % 6
    }

    case (MOVE_COUNTERCLOCKWISE): {
      return state === 0 ? 5 : state - 1
    }

    default: 
      return state;
  }
  
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {

  switch(action.type) {
    case (SET_QUIZ_INTO_STATE): {
      console.log(action.payload)
      return action.payload;
    }

    default:
      return state
  }
  
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
