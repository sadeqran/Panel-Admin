import jMoment from 'moment-jalaali'

export const convertDateToJalali =(date)=>{
    return jMoment(date).format('jYYYY/jMM/jDD')
}
export const convertFormDateToMiladi =(date)=>{
    return jMoment(date, 'jD / jM / jYYYY').format('YYYY-M-D')

}