import { type ApiSpaceXResponse, type Launch } from '../types/api'

export const getLatestLaunches = async () => {
  const res = await fetch('https://api.spacexdata.com/v4/launches/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: 'asc'
        },
        limit: 12
      }
    })
  })
  const { docs: launches } = (await res.json()) as ApiSpaceXResponse
  return launches
}
export const getLaunchBy = async ({ id }: { id: string }) => {
  const res = await fetch(`https://api.spacexdata.com/v4/launches/${id}`)
  const launch = (await res.json()) as Launch
  return launch
}
