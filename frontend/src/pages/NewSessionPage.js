import Layout from '../components/Layout/Layout'
import SessionForm from '../components/SessionForm/SessionForm'
import PaymentForm from '../components/PaymentForm/PaymentForm'
import { useState } from 'react'
const NewSessionPage = () => {
  const [customersName, setCustomersName] = useState(null)
  console.log(customersName)
  return (
    <Layout>
      <SessionForm setCustomersName={setCustomersName} />
      <PaymentForm customersName={customersName} />
    </Layout>
  )
}

export default NewSessionPage