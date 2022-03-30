import Layout from '../components/Layout/Layout'
import { Card, CardContent } from '@mui/material'
import { useEffect, useState } from 'react'

const SessionsPage = () => {
  const [sessionsData, setSessionsData] = useState(null)

  useEffect(() => {
    onLoad()
  }, [])
  
  const onLoad = async () => {
    try {
      const data = await fetch('http://localhost:3000/therapistsSessions')
      const body = await data.json()
      //iso dates lexicographical sorting
      body.sort(function(a, b) {
        return (a.date < b.date) ? -1 : ((a.date > b.date) ? 1 : 0);
    });
      setSessionsData(body)
    } catch(e) {
      console.error(e)
    }
  }
  return (
    <Layout>
      {sessionsData?.length < 1 && <p>loading...</p>}
      {/*Ideally this would be a responsive grid */}
      <div>
      {sessionsData?.length > 0 ? sessionsData?.map(({ date, fee, patientName, status }) => {
        return (
          <Card style={{margin: '1rem'}} key={date + patientName}>
            <CardContent>
              <p>{patientName}</p>
              <p>fee: {fee}</p>
              <p>date: {date}</p>
              <p>status: {status}</p>
            </CardContent>
          </Card>
        )
      }): null}
      </div>
    </Layout>
  )
}

export default SessionsPage