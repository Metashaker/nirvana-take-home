
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './components/Layout/Layout'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/new-session" element={<Layout />} />
            <Route path="/sessions" element={<Layout />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App