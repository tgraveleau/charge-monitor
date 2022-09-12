import React, { ReactNode } from 'react'
import './MainContainer.scss'

export interface MainContainerProps {
  children: ReactNode
}
export const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <div className='MainContainer'>
      {children}
    </div>
  )
}
