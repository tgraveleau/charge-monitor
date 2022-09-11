import React, { useEffect, useState } from 'react'
import { stationList } from '../../api/station'
import { Station } from '../../models/Station'
import { StationView } from './StationView'

export const StationList: React.FC = () => {
  const [stations, setStations] = useState<Station[]>([])
  const [error, setError] = useState<string>()
  useEffect(() => {
    stationList()
      .then(values => {
        setStations(values)
        setError(undefined)
      })
      .catch(reason => console.log(reason))
  }, [])

  return (
    <div className='StationList'>
      {error ?? <div>{error}</div>}
      {stations.map(station => <StationView key={`station-${station.uuid}`} station={station}/>)}
    </div>
  )
}
