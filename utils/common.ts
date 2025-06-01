export const getLast7Days = () => {
  const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const result = [];

  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    result.push({
      day: dayOfWeek[date.getDay()],
      date: date.toISOString().split("T")[0], // Format YYYY-MM-DD
      income: 0,
      expense: 0,
    });
  }
  return result.reverse();
  // Reverse to get the order from oldest to newest
};

export const getLast12Months = () => {
  const monthsOfYear = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ]
  const result = [];

  for (let i = 11; i >= 0; i--) {
    const date = new Date();
    date.setMonth(date.getMonth() - i);

    const monthName = monthsOfYear[date.getMonth()];
    const shortYear = date.getFullYear().toString().slice(-2); // Get last 2 digits of the year
    const formattedMonthYear = `${monthName} ${shortYear}`;
    const formattedDate = date.toISOString().split("T")[0]; // Format YYYY-MM-DD
    result.push({
      month: formattedMonthYear,
      fulldate: formattedDate, // Format YYYY-MM-DD
      income: 0,
      expense: 0,
    });
  }
  return result.reverse();
  // Reverse to get the order from oldest to newest
};

export const getYearsRange = (startYear: number, endYear: number):any => {
  const result = [];
  for (let year = startYear; year <= endYear; year++) {
    result.push({
      year: year.toString(),
      fulldate: `01-01-${year}`, // Format YYYY-MM-DD
      income: 0,
      expense: 0,
    });
  }
  return result.reverse();
}

