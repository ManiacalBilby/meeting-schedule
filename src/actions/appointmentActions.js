export function scheduleAppointment (appointment) {
  return {
    type: 'SCHEDULE_APPOINTMENT',
    appointment: {
      timeRange: null,
      clientName: null,
      clientPhoneNumber: null,
      isBooked: true
    }
  }
}