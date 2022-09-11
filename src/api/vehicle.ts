import { Vehicle } from '../models/Vehicle'

export const vehicleList = async (): Promise<Vehicle[]> =>
  await Promise.resolve([
    { uuid: '11111-11111-111111-111111', name: 'E208' },
    { uuid: '22222-22222-22222-22222', name: 'Zoé' }
  ])
