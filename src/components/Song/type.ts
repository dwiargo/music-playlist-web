type Share = {
  subject: string
  text: string
  href: string
  image: string
  twitter: string
  html: string
  avatar: string
}

export type TSong = {
  layout: string
  type: string
  key: string
  title: string
  subtitle: string
  share: Share
  isFavourite?: boolean
}
