export default function groupBy(array: any[], key: string) {
  return array.reduce((acc, value) => {
    ;(acc[value[key]] = acc[value[key]] || []).push(value)
    return acc
  }, {})
}
