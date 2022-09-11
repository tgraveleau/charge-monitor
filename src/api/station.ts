import { Station } from '../models/Station'

export const stationList = async (): Promise<Station[]> =>
  await Promise.resolve([
    { uuid: '11111-11111-111111-111111', name: 'Borne Paris 1er' },
    { uuid: '22222-22222-22222-22222', name: 'Borne Paris 2e' }
  ])
