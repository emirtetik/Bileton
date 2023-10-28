import React from "react"


interface StickyProps{
    
    children?: React.ReactNode
}

const Sticky = ({children}: StickyProps) => {
  return (
    <header className="text-white">
        {children}
    </header>
  )
}

export default Sticky