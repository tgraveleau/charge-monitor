import React from 'react'
import { Vehicle } from '../../models/Vehicle'

export interface VehicleViewProps {
  vehicle: Vehicle
}
export const VehicleView: React.FC<VehicleViewProps> = ({ vehicle }) => {
  return (
    <h1>{vehicle.name}</h1>
  )
}
