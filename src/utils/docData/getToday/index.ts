const CURRENT_DATE = new Date(); // 현재 시간
const CURRENT_YEAR = String(CURRENT_DATE.getFullYear()); // 현재 년도
let currentMonth = String(CURRENT_DATE.getMonth() + 1); // 현재 월
currentMonth = Number(currentMonth) >= 10 ? currentMonth : '0' + currentMonth; // 두 자리 표현
let currentDay = String(CURRENT_DATE.getDate());
currentDay = Number(currentDay) >= 10 ? currentDay : '0' + currentDay; // 두 자리로 표현

/** 현재 날짜 문자열로 가져오기 */
const getToday = () => {
 
  const today = `${CURRENT_YEAR}년 ${currentMonth}월 ${currentDay}일`;

  return { currentYear: CURRENT_YEAR , currentMonth, currentDay, today };
};

export default getToday;