const monthDetails = (month, year) => {
  let result = {
    noOfDays: 0,
    startDay: 0,
  };
  try {
    // this func will return no of days and starting week
    const d = new Date(year, month, 1, 10, 33, 30, 0);
    let day = d.getDay();
    result.startDay = day;
    result.noOfDays = new Date(year,month + 1,0).getDate();
    return result;
  } catch (error) {
    console.log(error);
    return result;
  }
};

export default monthDetails;