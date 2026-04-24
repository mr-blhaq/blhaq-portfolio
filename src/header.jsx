import React, { useState }  from 'react'
import './Header.css'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="navbar">
        <h2 className='logo'>BLHAQ .</h2>
        
        <div className={`navcontent ${menuOpen ? 'active' : ''}`}>
          <a href="#home" className="navlinks">Home</a>
          <a href="#skills" className="navlinks">Skill</a>
          <a href="#mywork" className="navlinks">Work</a>
          <a href="#aboutme" className="navlinks">About</a>
          <a href="#contact" className="navlinks">Contact</a>
        </div>

        <button className='hireme' 
          onClick={() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
         HIRE Me
        </button>

        <div 
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      </div>
    </>
  )
}

export default Header

