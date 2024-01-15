export const getShortenedText = (text: string, slice: number) =>
  text.length > slice ? text.slice(0, slice).concat('...') : text
