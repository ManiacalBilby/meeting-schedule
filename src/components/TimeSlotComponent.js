import React, { Component } from 'react';
import { scheduleAppointment } from '../actions/appointmentActions'

class TimeSlotComponent extends Component {

state = {
  clientName: this.props.appointment.clientName,
  clientPhoneNumber: this.props.appointment.clientPhoneNumber,
  isBooked: false
}

  render() {
    if(this.state.isBooked === false) {
    return (
      <div className="available-slot">
        <div className="time-range-text">
          {this.props.appointment.timeRange}
        </div>
    </div>
    
    )}
    else return (
      <div className="taken-slot">Booked</div>
    );
  }
}

export default TimeSlotComponent;
