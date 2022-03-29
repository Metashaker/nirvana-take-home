import { css } from '@emotion/react';


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
  backgroundColor: 'grey',
  height: '4rem',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly'
}
const footerStyles = {
  bottom: 0,
  backgroundColor: 'grey',
  width: '100%',
  height: '2.5rem'
}

const Layout = ({children}) => {
  return (
    <div style={layoutStyles}>
      <div style={navbarStyles}>
        <p>New session</p>
        <p>Previous sessions</p> 
        
        </div>
      <div>{children}</div>
      <div style={footerStyles}>
        <p style={{margin: '0 auto'}}>Footer</p>
      </div>
    </div>
  )
}
 
export default Layout