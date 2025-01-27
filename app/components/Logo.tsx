import React from 'react'

export const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <svg className={`w-10 h-10 ${className}`} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" fill="currentColor" />
      <path d="M30 70C40 60 60 60 70 70" stroke="white" strokeWidth="6" strokeLinecap="round" />
      <circle cx="35" cy="40" r="8" fill="white" />
      <circle cx="65" cy="40" r="8" fill="white" />
      <path d="M50 55L60 45M50 55L40 45" stroke="white" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

