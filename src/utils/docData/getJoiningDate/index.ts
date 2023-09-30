
const getJoiningDate = (joiningDate : string) => {

  const joiningYear = joiningDate?.substring(0,4);
  const joiningMonth = joiningDate?.substring(5,7);
  const joiningDay = joiningDate?.substring(8,10);

  return { joiningYear, joiningMonth, joiningDay };
};

export default getJoiningDate;