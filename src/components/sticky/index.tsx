import React from "react"


interface StickyProps{
    
    children?: React.ReactNode
}

const Sticky = ({children}: StickyProps) => {
  return (
    <header className="sticky border-b bg-[#1c212c] top-0 text-white  z-10">
        {children}
    </header>
  )
}

export default Sticky