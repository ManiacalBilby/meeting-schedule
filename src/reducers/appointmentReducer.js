let defaultState = [
  {
    timeRange: "9:00AM - 10:00AM",
    clientName: "",
    clientPhoneNumber: "",
    isBooked: false
  }, 
  {
    timeRange: "10:00AM - 11:00AM",
    clientName: "",
    clientPhoneNumber: "",
    isBooked: false
  }, 
  {
    timeRange: "11:00AM - 12:00PM",
    clientName: "",
    clientPhoneNumber: "",
    isBooked: false
  }, 
  {
    timeRange: "12:00PM - 1:00PM",
    clientName: "",
    clientPhoneNumber: "",
    isBooked: false
  }, 
  {
    timeRange: "1:00PM - 2:00PM",
    clientName: "",
    clientPhoneNumber: "",
    isBooked: false
  }, 
  {
    timeRange: "2:00PM - 3:00PM",
    clientName: "",
    clientPhoneNumber: "",
    isBooked: false
  }, 
  {
    timeRange: "3:00PM - 4:00PM",
    clientName: "",
    clientPhoneNumber: "",
    isBooked: false
  }, 
  {
    timeRange: "4:00PM - 5:00PM",
    clientName: "",
    clientPhoneNumber: "",
    isBooked: false
  } 
]

const appointments = (state = defaultState, action) => {
  switch (action.type) {
    case 'SCHEDULE_APPOINTMENT':
    console.log("banana reducer");
    return {...state.map((appointment, timeRange) => appointment.timeRange === timeRange)}
    default:
    console.log("default state returned")
      return state;
      
  }
}


export default appointments