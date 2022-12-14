import React from 'react';
import { connect } from 'react-redux';
import { moveClockwise, moveCounterClockwise } from '../state/action-creators';

function Wheel(props) {

  const { moveClockwise, moveCounterClockwise, pos } = props;
  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={`cog ${pos === 0 ? "active" : null}`} style={{ "--i": 0 }}>{pos === 0 ? "B" : null}</div>
        <div className={`cog ${pos === 1 ? "active" : null}`} style={{ "--i": 1 }}>{pos === 1 ? "B" : null}</div>
        <div className={`cog ${pos === 2 ? "active" : null}`} style={{ "--i": 2 }}>{pos === 2 ? "B" : null}</div>
        <div className={`cog ${pos === 3 ? "active" : null}`} style={{ "--i": 3 }}>{pos === 3 ? "B" : null}</div>
        <div className={`cog ${pos === 4 ? "active" : null}`} style={{ "--i": 4 }}>{pos === 4 ? "B" : null}</div>
        <div className={`cog ${pos === 5 ? "active" : null}`} style={{ "--i": 5 }}>{pos === 5 ? "B" : null}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={moveCounterClockwise}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={moveClockwise}>Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    pos: state.wheel
  }
}

export default connect(mapStateToProps, {moveClockwise, moveCounterClockwise})(Wheel);
