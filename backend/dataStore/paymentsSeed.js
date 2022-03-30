const payments = [
  {
    therapistSessionId: 1,//fk to therapistsSession table
    patientName: "Example Popoca",
    date: new Date().toISOString(),
    totalAmount: 5000, //displayed with cents, so this is really $50.00
    status: 'pending', //
    paymentData: {
      cardNumber: '1234392349094',
      expirationDate: '03/24',
      cvv: '343'
    }
  }
]

module.exports = payments