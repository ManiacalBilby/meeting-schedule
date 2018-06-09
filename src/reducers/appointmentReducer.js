const defaultState = [
  {
    timeRange: "9:00AM - 10:00AM",
    clientName: null,
    clientPhoneNumber: null,
    isBooked: false
  }, 
  {
    timeRange: "10:00AM - 11:00AM",
    clientName: null,
    clientPhoneNumber: null,
    isBooked: false
  }, 
  {
    timeRange: "11:00AM - 12:00PM",
    clientName: null,
    clientPhoneNumber: null,
    isBooked: false
  }, 
  {
    timeRange: "12:00PM - 1:00PM",
    clientName: null,
    clientPhoneNumber: null,
    isBooked: false
  }, 
  {
    timeRange: "1:00PM - 2:00PM",
    clientName: null,
    clientPhoneNumber: null,
    isBooked: false
  }, 
  {
    timeRange: "2:00PM - 3:00PM",
    clientName: null,
    clientPhoneNumber: null,
    isBooked: false
  }, 
  {
    timeRange: "3:00PM - 4:00PM",
    clientName: null,
    clientPhoneNumber: null,
    isBooked: false
  }, 
  {
    timeRange: "4:00PM - 5:00PM",
    clientName: null,
    clientPhoneNumber: null,
    isBooked: false
  } 
]

function appointments (state = defaultState, action) {
  switch (action.type) {
    case 'SCHEDULE_APPOINTMENT':
      return [...state, action.appointment]
    default:
      return state
  }
}


export default appointments