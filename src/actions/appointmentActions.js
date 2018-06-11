export function scheduleAppointment (appointment) {
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