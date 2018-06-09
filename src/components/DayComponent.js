import React, { Component } from 'react';
import TimeSlotComponent from './TimeSlotComponent'

const hourList = ["9:00AM - 10:00AM", "10:00AM - 11:00AM", "11:00AM - 12:00PM", "12:00PM - 1:00PM", "1:00PM - 2:00PM", "2:00PM - 3:00PM", "3:00PM - 4:00PM", "4:00PM - 5:00PM" ]
const appointmentHours = hourList.map((appointmentSlot, index) => {
return (<TimeSlotComponent key={index} time={appointmentSlot} /> )
})

class DayComponent extends Component {

  render() {

    return (
      <div>{appointmentHours}</div>
    );
  }
}

export default DayComponent;