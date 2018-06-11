import React, { Component } from 'react';
import { connect } from 'react-redux';
import TimeSlotComponent from './TimeSlotComponent';

class DayComponent extends Component {

  render() {

    return (
      <div>
          {this.props.appointments.map((appointmentSlot, index) =>
          <TimeSlotComponent key={index} appointment={appointmentSlot} />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appointments: state.appointments
  }
}

export default connect(mapStateToProps)(DayComponent);
