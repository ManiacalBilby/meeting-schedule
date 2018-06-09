export function ScheduleAppointment (appointment) {
  return {
    type: 'SCHEDULE_APPOINTMENT',
    appointment: {
      timeRange: timeRange,
      clientName: clientName,
      clientPhoneNumber: clientPhoneNumber,
      isBooked: false
    }
  }
}