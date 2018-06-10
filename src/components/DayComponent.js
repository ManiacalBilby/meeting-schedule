import React, { Component } from 'react';
import { connect } from 'react-redux';
import TimeSlotComponent from './TimeSlotComponent';

class DayComponent extends Component {

  clickedSlot = () => {
    console.log("clicked")
  }

  render() {

    return (
      <div onClick={this.clickedSlot}>
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
