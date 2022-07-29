import dayjs from "dayjs"
export const formarDate = (date, config) => {
  return dayjs(date).format(config)
}
export const addday = (number, config) => {
  let time = new Date().getTime()
  return dayjs(time).add(number, 'day').format(config)
}
export const transfrom = (str) => {
  str = str.replace(/[^\d+]/g, (res) => {
    return '-'
  })
  str=str.substring(0, str.length - 1)
  return   str 
 
}
export const diff = (date1, date2) => {
  let starttime = `${new Date().getFullYear()}年${date1}`;
  starttime=transfrom(date1)
  let endtime = `${new Date().getFullYear()}年${date2}`;
  endtime=transfrom(date2)
  return dayjs(endtime).diff(dayjs(starttime), 'day')
}