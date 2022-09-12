interface Route {
  path: string
  label: string
}
export const Routes: {[name: string]: Route} = {
  station: {
    path: '/stations',
    label: 'Bornes'
  },
  vehicle: {
    path: '/vehicles',
    label: 'Véhicules'
  }
}
