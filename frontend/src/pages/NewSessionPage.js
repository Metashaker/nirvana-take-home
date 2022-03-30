import Layout from '../components/Layout/Layout'
import SessionForm from '../components/SessionForm/SessionForm'
import PaymentForm from '../components/PaymentForm/PaymentForm'
const NewSessionPage = () => {
  return (
    <Layout>
      <SessionForm />
      <PaymentForm />
    </Layout>
  )
}

export default NewSessionPage