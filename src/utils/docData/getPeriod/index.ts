import getToday from 'utils/docData/getToday';

interface IPeriodProps {
    joiningYear : string;
    joiningMonth : string;
    joiningDay : string;
}

const getPeriod = ({ 
  joiningYear,
  joiningMonth, 
  joiningDay 
}: IPeriodProps ) => {

  /** 입사일자 */
  const date1 = new Date(Number(joiningYear),Number(joiningMonth) - 1, Number(joiningDay));
  
  /** 현재날짜 */
  const { currentYear, currentMonth, currentDay } = getToday();
  const date2 = new Date(Number(currentYear),Number(currentMonth) - 1,Number(currentDay));

  /** 재직기간 계산 */
  const diff = Number(date2) - Number(date1);
  let monthDiff = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  let yearDiff = 0;
  if (monthDiff >= 13) {
    yearDiff = Math.floor(monthDiff / 12);
    monthDiff = Math.abs(monthDiff - (yearDiff * 12));
  }

  const yearPeriod = yearDiff < 1 ? '' : '' + yearDiff + '년';
  const monthPeriod = monthDiff < 1 ? '' : monthDiff + '개월' ;

  return { yearPeriod, monthPeriod };

};

export default getPeriod;