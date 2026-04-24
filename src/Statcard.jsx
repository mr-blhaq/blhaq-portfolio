import React from 'react'
import './Statcard.css'

function Statcard({icon, statnum, statdesc}) {
  return (
    <>
      <div class="stat-card">
        <div class="icon">
          {icon}
        </div>
        <h2>{statnum}</h2>
        <span>{statdesc} </span>
      </div>
    </>
  )
}

export default Statcard
