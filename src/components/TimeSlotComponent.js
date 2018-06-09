import React from 'react';

const TimeSlotComponent = (props) => {
  return (
    <div>
    <div className="available-slot">
      {props.time}
    </div>
    </div>
  );
};

export default TimeSlotComponent;