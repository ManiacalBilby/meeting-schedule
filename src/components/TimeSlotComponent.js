import React from 'react';
import { connect } from 'react-redux'

const TimeSlotComponent = (props) => {
  return (
    <div className="available-slot">
      <div className="time-range-text">
        {props.time}
      </div>
    </div>
  );
};

export default TimeSlotComponent;
