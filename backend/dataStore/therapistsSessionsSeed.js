const therapistSessions = [
  {
    therapistId: 1, //fk to users table
    therapistSessionId: 1,
    patientName: "Example Popoca",
    date: new Date().toISOString(),
    fee: 5000, //displayed with cents, so this is really $50.00
    status: 'pending' //added this field as a bonus
  }
]
module.exports = therapistSessions