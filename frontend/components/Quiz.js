import React from 'react'
import { connect } from 'react-redux';
import { fetchQuiz, selectAnswer, postAnswer } from '../state/action-creators';

function Quiz(props) {

  const {quiz, fetchQuiz, selectAnswer, answer, postAnswer} = props;

  if (!quiz) {
    fetchQuiz();
  }
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              <div className={`answer ${answer===1 ? "selected" : null}`}>
                {quiz.answers[0].text}
                <button onClick={() => selectAnswer(1)}>
                  {answer === 1 ? "SELECTED" : "Select"}
                </button>
              </div>

              <div className={`answer ${answer===2 ? "selected" : null}`}>
              {quiz.answers[1].text}
                <button onClick={() => selectAnswer(2)}>
                  {answer === 2 ? "SELECTED" : "Select"}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" onClick={() => postAnswer(quiz.quiz_id, answer === 1 ? quiz.answers[0].answer_id : quiz.answers[1].answer_id)} disabled={!answer}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    quiz: state.quiz,
    answer: state.selectedAnswer
  }
}

export default connect(mapStateToProps, {fetchQuiz, selectAnswer, postAnswer})(Quiz);
