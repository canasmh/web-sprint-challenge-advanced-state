// ❗ You don't need to add extra action creators to achieve MVP

import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER, SET_INFO_MESSAGE} from "./action-types"
import axios from 'axios'

export function moveClockwise() { 
  return ({type: MOVE_CLOCKWISE});
}

export function moveCounterClockwise() { 
  return ({type: MOVE_COUNTERCLOCKWISE});
}

export function selectAnswer(answer) { 
  return ({type: SET_SELECTED_ANSWER, payload: answer})
}

export function setMessage() { }

export function setQuiz() { }

export function inputChange() { }

export function resetForm() { }

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    dispatch({type: SET_QUIZ_INTO_STATE, payload: null });
    axios
      .get("http://localhost:9000/api/quiz/next")
      .then(res => dispatch({type: SET_QUIZ_INTO_STATE, payload: res.data}))
      .catch(err => dispatch({type: SET_QUIZ_INTO_STATE, payload: null}));
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  }
}
export function postAnswer(quiz_id, answer_id) {
  return function (dispatch) {
    dispatch({type: SET_SELECTED_ANSWER, payload: null})
    dispatch({type: SET_QUIZ_INTO_STATE, payload: null });
    axios.post("http://localhost:9000/api/quiz/answer", {quiz_id: quiz_id, answer_id: answer_id})
      .then(res => dispatch({type: SET_INFO_MESSAGE, payload: res.data.message}))
      .catch(err => console.log(err));
    ;

    fetchQuiz();
    
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
