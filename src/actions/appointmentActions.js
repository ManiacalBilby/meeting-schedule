export function scheduleAppointment (appointment) {

  console.log(appointment.clientName)
  return {    
    type: 'SCHEDULE_APPOINTMENT',
    payload: {
      // timeRange: null,
      clientName: appointment.clientName,
      clientPhoneNumber: appointment.clientPhoneNumber,
      isBooked: appointment.isBooked,
    }
  }
}