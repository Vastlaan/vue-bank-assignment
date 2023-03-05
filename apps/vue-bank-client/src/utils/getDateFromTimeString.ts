import { computed } from 'vue'

export const options: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
}
export const optionsBasic: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
}
export default function getDateFromTimeString(datetime: string) {
  return computed(() => {
    const date = new Date(datetime).toLocaleDateString('nl-NL', options)
    return date
  })
}
