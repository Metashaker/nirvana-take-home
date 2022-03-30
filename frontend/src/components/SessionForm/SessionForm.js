import { TextField, Button } from '@mui/material'
import { useForm } from "react-hook-form";
const formStyles= {
  display: 'flex',
  flexDirection: 'column',
  height: '50%'
}
const SessionForm = () => {
  const { register, handleSubmit, getValues } = useForm();
  const onSubmit = async () => {
    try {
      const values = getValues()
      await fetch('http://localhost:3000/therapistsSessions', 
      { method: 'POST', 
      body: JSON.stringify({patientName: values.fullName, date: values.date, fee: values.fee}), 
      headers: { "Content-type" : 'application/json'}})
    } catch(e) {
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
    </form>
    </>
  )
}

export default SessionForm