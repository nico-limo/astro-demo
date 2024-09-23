// Tipo para representar el objeto 'fairings'
type Fairings = {
  reused: boolean | null
  recovery_attempt: boolean | null
  recovered: boolean | null
  ships: string[]
}

// Tipo para representar el objeto 'patch' dentro de 'links'
type Patch = {
  small: string
  large: string
}

// Tipo para representar el objeto 'reddit' dentro de 'links'
type Reddit = {
  campaign: string | null
  launch: string | null
  media: string | null
  recovery: string | null
}

// Tipo para representar el objeto 'flickr' dentro de 'links'
type Flickr = {
  small: string[]
  original: string[]
}

// Tipo para representar el objeto 'links'
type Links = {
  patch: Patch
  reddit: Reddit
  flickr: Flickr
  presskit: string | null
  webcast: string | null
  youtube_id: string | null
  article: string | null
  wikipedia: string | null
}

// Tipo para representar los elementos dentro de 'failures'
type Failure = {
  time: number
  altitude: number | null
  reason: string
}

// Tipo para representar los elementos dentro de 'cores'
type Core = {
  core: string
  flight: number
  gridfins: boolean
  legs: boolean
  reused: boolean
  landing_attempt: boolean
  landing_success: boolean | null
  landing_type: string | null
  landpad: string | null
}

// Tipo principal para representar cada elemento del array
export type Launch = {
  fairings: Fairings | null
  links: Links
  static_fire_date_utc: Date | null
  static_fire_date_unix: number | null
  net: boolean
  window: number
  rocket: string
  success: boolean
  failures: Failure[]
  details: string
  crew: string[]
  ships: string[]
  capsules: string[]
  payloads: string[]
  launchpad: string
  flight_number: number
  name: string
  date_utc: string
  date_unix: number
  date_local: string
  date_precision: string
  upcoming: boolean
  cores: Core[]
  auto_update: boolean
  tbd: boolean
  launch_library_id: string | null
  id: string
}

// Tipo para representar el array completo de lanzamientos
type Launches = Launch[]

export type ApiSpaceXResponse = {
  docs: Launches
  totalDocs: number
  offset: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: number | null
  nextPage: number | null
}
