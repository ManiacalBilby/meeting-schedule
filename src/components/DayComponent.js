import React from 'react';
import { connect } from 'react-redux';
import TimeSlotComponent from './TimeSlotComponent';

const DayComponent = (props) => {
  return (
    <div className="daily-schedule">
      {props.appointments.appointmentSlots.map((appointmentSlot, index) =>
      <TimeSlotComponent key={index} appointment={appointmentSlot} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    appointments: state.appointments
  }
};

export default connect(mapStateToProps)(DayComponent);
