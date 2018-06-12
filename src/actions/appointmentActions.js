export function scheduleAppointment (appointment) {
  return {    
    type: 'SCHEDULE_APPOINTMENT',
    payload: {
      timeRange: appointment.timeRange,
      clientName: appointment.clientName,
      clientPhoneNumber: appointment.clientPhoneNumber,
      isBooked: appointment.isBooked,
    }
  }
};