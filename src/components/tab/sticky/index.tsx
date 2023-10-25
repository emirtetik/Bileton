import React from "react"


interface StickyProps{
    
    children?: React.ReactNode
}

const Sticky = ({children}: StickyProps) => {
  return (
    <header className="sticky top-0 text-white bg-blue-500 border-b">
        {children}
    </header>
  )
}

export default Sticky