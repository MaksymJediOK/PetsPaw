export const distributeItems = <T extends unknown>(items: T[], batchSize: number): T[][] => {
  const batches: T[][] = []

  while (items.length > 0) {
    batches.push(items.splice(0, batchSize))
  }

  return batches
}
