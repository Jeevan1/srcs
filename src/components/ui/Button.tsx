import React from 'react'

const Button = ({children,className , ...props}:{children: React.ReactNode, className?: string}) => {
  return (
    <button className={`bg-primary text-white cursor-pointer px-4 py-2 rounded-md ${className}`} {...props}>{children}</button>
  )
}

export default Button