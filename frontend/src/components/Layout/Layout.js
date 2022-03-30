
import { Link } from 'react-router-dom'

  // positions app header + content at top, and
  // footer at bottom of layout.
const layoutStyles = {
  width: '100vw',
  minHeight: '100vh',
  overflowX: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}

const navbarStyles = {
  width: '100%',
  backgroundColor: 'lightgrey',
  minHeight: '4rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  marginBottom: '2rem'
}
const footerStyles = {
  bottom: 0,
  backgroundColor: 'lightgrey',
  width: '100%',
  minHeight: '2.5rem',
  marginTop: '2rem'
}
const linkStyles = {
  textDecoration: 'none', 
  color: 'black',
  cursor: 'pointer'
}
//possible page state is enum between 
const Layout = ({children}) => {
  return (
    <div style={layoutStyles}>
      <div style={navbarStyles}>
        <Link to='/new-session' style={linkStyles}>New session</Link>
        <Link to='/sessions' style={linkStyles}>Previous sessions</Link> 
        </div>
        <div style={{margin: '0 auto'}}>{children}</div>
      <div style={footerStyles} />
    </div>
  )
}
 
export default Layout