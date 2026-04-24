import React, { useEffect, useRef, useState } from 'react'
import './Workcard.css'

function Workcard({iconcolor, icon, title, description,index}) {
  const ref = useRef()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div
       ref={ref}
       className={`workcardcon ${visible ? 'show' : ''}`}
       style={{transitionDelay: `${index *  0.15}s`}}
      >
        <div className="icon" style={{background: iconcolor}}>
            {icon}
            
        </div>

        <p className="worktitle">
            {title}
        </p>

        <p className="description">
           {description}
        </p>
      </div>
    </>
  )
}

export default Workcard
