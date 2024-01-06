export const formatDate = (date: Date) => {
  const options = {
    hour: '2-digit' as '2-digit' | 'numeric' | undefined,
    minute: '2-digit' as '2-digit' | 'numeric' | undefined,
    hour12: false,
  }
  return new Intl.DateTimeFormat('en-US', options).format(date)
}
