import React, { Component } from 'react';
import { scheduleAppointment } from '../actions/appointmentActions'
import { connect } from 'react-redux'
import Modal from 'react-responsive-modal'

class TimeSlotComponent extends Component {

state = { 
  timeRange: this.props.appointment.timeRange,
  clientName: this.props.appointment.clientName,
  clientPhoneNumber: this.props.appointment.clientPhoneNumber,
  isBooked: false,
  open: false,
}

onOpenModal = () => {
  this.setState({ open: true });
};

onCloseModal = () => {
  this.setState({ open: false });
};

handleChange = (event) => {
  this.setState({ 
    [event.target.name]: event.target.value
  })
}

handleNewAppointment = async (event) => {
  event.preventDefault()
  await this.setState({...this.state, isBooked: true, open: false})
  await this.props.scheduleAppointment(this.state)
  console.log("TimeSlotComponent local State",this.state)
}

  render() {
    const { open } = this.state;
    if(this.state.isBooked) {
      return (
        <div onClick={this.onOpenModal} className="taken-slot">
        <div className="time-range-text">
          {this.props.appointment.timeRange}
        </div>

        <Modal open={open} onClose={this.onCloseModal} showCloseIcon={false} center>
              <form onSubmit={this.handleNewAppointment}>
              <label htmlFor="clientName">Name:</label>
              <input onChange={this.handleChange} name="clientName" type="text" value={this.state.clientName}/>
              <label htmlFor="clientPhoneNumber">PhoneNumber:</label>
              <input onChange={this.handleChange} name="clientPhoneNumber"type="text" value={this.state.clientPhoneNumber}/>
              <button>Edit Appointment</button>
            </form>
        </Modal>
      </div>
      )
    }

    else return (
      <div onClick={this.onOpenModal} className="available-slot">
        <div className="time-range-text">
          {this.props.appointment.timeRange}
        </div>
        <Modal open={open} onClose={this.onCloseModal} showCloseIcon={false} center>
              <form onSubmit={this.handleNewAppointment}>
              <label htmlFor="clientName">Name:</label>
              <input onChange={this.handleChange} name="clientName" type="text" value={this.state.clientName}/>
              <label htmlFor="clientPhoneNumber">PhoneNumber:</label>
              <input onChange={this.handleChange} name="clientPhoneNumber"type="text" value={this.state.clientPhoneNumber}/>
              <button>Add New Appointment</button>
            </form>
        </Modal>
      </div>
    )}
  }

export default connect(null, { scheduleAppointment }) (TimeSlotComponent);
