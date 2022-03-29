
import { Link } from 'react-router-dom'

  // positions app header + content at top, and
  // footer at bottom of layout.
const layoutStyles = {
  width: '100vw',
  height: '100vh',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}

const navbarStyles = {
  width: '100%',
  backgroundColor: 'lightgrey',
  height: '4rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-evenly'
}
const footerStyles = {
  bottom: 0,
  backgroundColor: 'lightgrey',
  width: '100%',
  height: '2.5rem'
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
        <p style={linkStyles}>New session</p>
        <p style={linkStyles}>Previous sessions</p> 
        </div>
        <div>{children}</div>
      <div style={footerStyles} />
    </div>
  )
}
 
export default Layout