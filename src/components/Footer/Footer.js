import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
      <footer className='footer'>
        &copy; Fashion store {new Date().getFullYear()}

      </footer>
    </div>
  )
}

export default Footer
