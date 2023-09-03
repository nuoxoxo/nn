export const GetRandomDateString = (): string[] => {
  const [L, R] = [new Date(2023, 0, 1), new Date(2023, 11, 31)]
  // .getTime : returns date's epoch time in milliseconds
  const EpochOffset = L.getTime() + Math.random() * (R.getTime() - L.getTime())
  const RandomTime = new Date(EpochOffset)
  const Months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ]
  const [M, D] = [RandomTime.getMonth(), RandomTime.getDay()]
  return [Months[M], String(D)]
}

