import { TextField, Button } from '@mui/material'
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";

const formStyles= {
  display: 'flex',
  flexDirection: 'column',
  height: '50%'
}
const PaymentForm = ({ onSuccess, onError, customersName }) => {
  const { register, handleSubmit, getValues } = useForm();
  const [createdSessionSuccessfully, setcreatedSessionSuccessfully] = useState(false)

  useEffect(() => {
    if (createdSessionSuccessfully) {
      setTimeout(() => setcreatedSessionSuccessfully(false), 5000)
    }
  }, [createdSessionSuccessfully, customersName])
  
  const onSubmit = async () => {
    try {
      const { patientName, totalAmount, cardNumber, expirationDate, cvv} = getValues()
      await fetch('http://localhost:3000/payments', 
      { method: 'POST', 
      body: JSON.stringify({patientName, totalAmount, cardNumber, expirationDate, cvv}), 
      headers: { "Content-type" : 'application/json'}}).then(() => {
        onSuccess && onSuccess()
        setcreatedSessionSuccessfully(true)
      })
    } catch(e) {
      onError && onError()
      console.error(e)
    }
  }
  //!therapistSessionId || !patientName || !totalAmount || !cardNumber || !cardExpirationDate || !cardCVV
  return (
    <>
    <h1>Payment Form</h1>
    <form onSubmit={handleSubmit(onSubmit)} style={formStyles}>
      <TextField {...register('patientName')} label="Customer's card name" />
      <TextField {...register('totalAmount')} type='number' label='Amount to pay' />
      <p>Credit/Debit Card data</p>
      <TextField {...register('cardNumber')} label='Card Number'/>
      <TextField {...register('expirationDate')} label='Expiration Date'/>
      <TextField {...register('cvv')} label='CVV'/>
      <Button type='submit' variant='outlined'>Create new session</Button>
      {createdSessionSuccessfully && <p>Payment successfully applied</p>}
    </form>
    </>
  )
}

export default PaymentForm