export default function groupBy(array: any[], key: string) {
  return array.reduce((acc, value) => {
    // if not exist create key with empty array
    acc[value[key]] = acc[value[key]] || []
    // append value to the key
    acc[value[key]].push(value)
    return acc
  }, {})
}
