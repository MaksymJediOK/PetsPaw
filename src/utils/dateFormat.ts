type timeValue = '2-digit' | 'numeric' | undefined

export const formatDate = (date: Date) => {
  const options = {
    hour: '2-digit' as timeValue,
    minute: '2-digit' as timeValue,
    hour12: false,
  }
  return new Intl.DateTimeFormat('en-US', options).format(date)
}
