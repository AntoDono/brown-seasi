export interface SpeakerTalk {
  slug: string
  /** ISO date (YYYY-MM-DD), used for sorting and past/upcoming status. */
  date: string
  speaker: string
  affiliation: string
  role?: string
  /** Talk title — omit while TBA. */
  title?: string
  abstract?: string
  location?: string
  time?: string
  portrait?: string
  flyer?: string
  gallery?: { src: string; alt: string; caption?: string }[]
}

export const speakerSeriesTerm = "Fall '26"

export const speakerTalks: SpeakerTalk[] = [
  {
    slug: 'juno-parrenas',
    date: '2026-09-30',
    speaker: 'Juno Parreñas',
    affiliation: 'Cornell University',
    role: 'Associate Professor of Science and Technology Studies and Feminist, Gender and Sexuality Studies',
    title: 'Tropical Polar Bears',
    location: 'Sharpe House, Room 125',
    time: '5:00 – 6:30 PM',
    portrait: '/images/speaker-series/juno-parrenas.png',
    flyer: '/images/speaker-series/flyer-juno-parrenas.png',
    gallery: [
      {
        src: '/images/speaker-series/inuka-statue.jpg',
        alt: 'Bronze statue of Inuka the polar bear among tropical plants',
        caption: 'Memorial statue of Inuka',
      },
      {
        src: '/images/speaker-series/inuka-cafe.jpg',
        alt: 'Inuka Cafe storefront painted with icy mountains',
        caption: 'Inuka Cafe',
      },
      {
        src: '/images/speaker-series/inuka-keychain.jpg',
        alt: 'Plush polar bear keychain embroidered with the name Inuka',
        caption: 'Inuka keychain',
      },
    ],
  },
  {
    slug: 'yu-mei-balasingamchow',
    date: '2026-10-21',
    speaker: 'Yu-Mei Balasingamchow',
    affiliation: 'Author of Names Have Been Changed',
    portrait: '/images/speaker-series/yu-mei-balasingamchow.png',
  },
  {
    slug: 'nurfadzilah-yahaya',
    date: '2026-11-10',
    speaker: 'Nurfadzilah Yahaya',
    affiliation: 'Yale University',
    portrait: '/images/speaker-series/nurfadzilah-yahaya.jpg',
  },
]

/** "2026-09-30" → Date at local noon (avoids timezone day-shift). */
function toDate(iso: string) {
  return new Date(`${iso}T12:00:00`)
}

export function formatTalkDate(iso: string, style: 'long' | 'short' = 'long') {
  return toDate(iso).toLocaleDateString('en-US', style === 'long'
    ? { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }
    : { month: 'short', day: '2-digit', year: 'numeric' })
}

export function talkDateParts(iso: string) {
  const d = toDate(iso)
  return {
    day: d.toLocaleDateString('en-US', { day: '2-digit' }),
    month: d.toLocaleDateString('en-US', { month: 'short' }),
    weekday: d.toLocaleDateString('en-US', { weekday: 'short' }),
  }
}

export function isTalkPast(iso: string) {
  const end = toDate(iso)
  end.setHours(23, 59, 59)
  return end.getTime() < Date.now()
}
