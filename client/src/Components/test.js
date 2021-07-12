function calculateDaysBetweenDates(startDate, endDate) {
  var start = new Date(startDate);
  var end = new Date(endDate);
  var numDays = Math.round((end - start) / (1000 * 60 * 60 * 24));
  return numDays;
}