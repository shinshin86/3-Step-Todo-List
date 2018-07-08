export function getDatetime() {
  const timestamp = Date.now()
  const dt = new Date(timestamp)
  const year = ('0000' + dt.getFullYear()).slice(-4)
  const month = ('00' + (dt.getMonth() + 1)).slice(-2)
  const day = ('00' + dt.getDate()).slice(-2)
  const hours = ('00' + dt.getHours()).slice(-2)
  const minutes = ('00' + dt.getMinutes()).slice(-2)
  const seconds = ('00' + dt.getSeconds()).slice(-2)
  const datetime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
  return { ts: timestamp, dt: datetime }
}

export function getWorkingTime(startTime, finishTime) {
  return finishTime - startTime
}
