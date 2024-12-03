/**
 * 두 날짜 사이의 기간을 계산
 * @param start 시작 날짜
 * @param end 종료 날짜
 * @returns {number} 시작 날짜와 종료 날짜 사이의 기간 (일)
 * */
export const calculatedPeriod = (start: string, end: string): number => {
  // start와 end 날짜를 Date 객체로 변환
  const startDate = new Date(start)
  const endDate = new Date(end)
  const oneDay = 60 * 60 * 24 // 초 * 분 * 시간

  // 두 날짜의 차이를 일(day) 단위로 계산하여 반환
  return Math.abs((endDate.getTime() - startDate.getTime()) / oneDay)
}