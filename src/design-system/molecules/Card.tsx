import React, { FunctionComponent, PropsWithChildren } from 'react'

export const Card: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-10 w-10 rounded-full" >
      {children}
    </div>
  )
}

export default Card
