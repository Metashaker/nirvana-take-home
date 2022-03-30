import { TextField, Button } from '@mui/material'
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
const formStyles= {
  display: 'flex',
  flexDirection: 'column',
  height: '50%'
}
const SessionForm = ({ onSuccess, onError }) => {
  const { register, handleSubmit, getValues } = useForm();
  const [createdSessionSuccessfully, setcreatedSessionSuccessfully] = useState(false)

  useEffect(() => {
    if (createdSessionSuccessfully) {
      setTimeout(() => setcreatedSessionSuccessfully(false), 5000)
    }
  }, [createdSessionSuccessfully])
  
  const onSubmit = async () => {
    try {
      const values = getValues()
      await fetch('http://localhost:3000/therapistsSessions', 
      { method: 'POST', 
      body: JSON.stringify({patientName: values.fullName, date: values.date, fee: values.fee}), 
      headers: { "Content-type" : 'application/json'}}).then(() => {
        onSuccess()
        setcreatedSessionSuccessfully(true)
      })
    } catch(e) {
      onError()
      console.error(e)
    }
  }
  return (
    <>
    <h1>Mental health ahead!</h1>
    <form onSubmit={handleSubmit(onSubmit)} style={formStyles}>
      <TextField {...register('fullName')} label='Full name' />
      <p>Please add cents to your fee</p>
      <TextField {...register('fee')} type='number' label='Fee' />
      <TextField {...register('date')} type='date' />
      <Button type='submit' variant='outlined'>Create new session</Button>
      {createdSessionSuccessfully && <p>Session successfully created</p>}
    </form>
    </>
  )
}

export default SessionForm