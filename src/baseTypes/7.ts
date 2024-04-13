/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days {
  Mon,
  Tues,
  Wed,
  Thurs,
  Fri,
  Sat,
  Sun,
}

function isWeekend(day: Days): boolean {
  return day === Days.Sun || day === Days.Sat
};
