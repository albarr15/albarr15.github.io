export function DateRange(startDate: Date, endDate: Date): string {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const startMonth = months[startDate.getMonth()];
  const startYear = startDate.getFullYear();
  const endMonth = months[endDate.getMonth()];
  const endYear = endDate.getFullYear();

  const isSameYear = startYear === endYear;
  const isSameMonth = startMonth === endMonth;

  if (!isSameYear) {
    return `${startMonth} ${startYear} - ${endMonth} ${endYear}`;
  } else if (isSameMonth) {
    return `${endMonth} ${endYear}`;
  } else {
    return `${startMonth} - ${endMonth} ${endYear}`;
  }
}
