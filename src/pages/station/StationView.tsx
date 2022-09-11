import React from 'react'
import { Station } from '../../models/Station'

export interface StationViewProps {
  station: Station
}
export const StationView: React.FC<StationViewProps> = ({ station }) => {
  return (
    <h1>{station.name}</h1>
  )
}
