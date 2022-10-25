import { getTimeInBetweenDates } from "./date.js";
/**
 * method calculate days in-between two given dates
 * takes two parameters, first date (has to be the earliest) and second date (has to be the latest) 
 * (date format: year-month-day) ex: 2010-10-1
 * returns 
 */

console.log("Difference of days between dates: " + getTimeInBetweenDates('2018-1-1', '2019-1-2'));