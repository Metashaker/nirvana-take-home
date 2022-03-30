
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import NewSessionPage from './pages/NewSessionPage'
import SessionsPage from './pages/SessionsPage'


function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout><p>Welcome! Click on the menu options</p></Layout>}/>
            <Route path="/new-session" element={<NewSessionPage />} />
            <Route path="/sessions" element={<SessionsPage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App