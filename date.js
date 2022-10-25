/**
 * 
 * @param {*} dateOne 
 * @param {*} dateTwo 
 * @returns number
 */
export const getTimeInBetweenDates = (dateOne, dateTwo) => {
    const [yOne, mOne, dOne] = dateOne.split('-');
    const [yTwo, mTwo, dTwo] = dateTwo.split('-');
    
    let yearOne = parseInt(yOne);
    let monthOne = parseInt(mOne);
    let dayOne = parseInt(dOne);

    let yearTwo = parseInt(yTwo);
    let monthTwo = parseInt(mTwo);
    let dayTwo = parseInt(dTwo);

    let totalDaysInBetweenYears = calculateDaysBetweenYears(yearOne, yearTwo);

    let daysOfMonthOne = calculateMonth(yearOne, monthOne);
    let daysOfMonthTwo = calculateMonth(yearTwo, monthTwo);

    let totalDaysOfMonth = calculateDaysOfMonths(daysOfMonthOne, daysOfMonthTwo);

    let totalDays = calculateTotalDays(dayOne, dayTwo);

    let totalDaysOfBetweenDates = calculateTotalDaysBetweenDates(totalDaysInBetweenYears, totalDaysOfMonth, totalDays);
    
    return totalDaysOfBetweenDates;
}

/**
 * 
 * @param {*} totalDaysOfYears 
 * @param {*} totalDaysOfMonths 
 * @param {*} totalDays 
 * @returns number
 */
const calculateTotalDaysBetweenDates = (totalDaysOfYears, totalDaysOfMonths, totalDays) => {
    return totalDaysOfYears + totalDaysOfMonths + totalDays;
}

/**
 * 
 * @param {*} dayOne 
 * @param {*} dayTwo 
 * @returns number
 */
const calculateTotalDays = (dayOne, dayTwo) => {
    return Math.abs(dayOne - dayTwo);
}
/**
 * 
 * @param {*} daysOfMonthsOne 
 * @param {*} daysOfMonthsTwo 
 * @returns number
 */
const calculateDaysOfMonths = (daysOfMonthsOne, daysOfMonthsTwo) => {
    return Math.abs(daysOfMonthsOne - daysOfMonthsTwo);
}

/**
 * 
 * @param {*} currentYear 
 * @param {*} month 
 * @returns number
 */
const calculateMonth = (currentYear, month) => {
    let commonMonths = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30]
    let leapMonths = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30]
    let daysOfMonths = 0;
    let isLeap = false

    for (let index = 0; index < month; index++) {
        if(isLeap = !((currentYear % 4) || (!(currentYear % 100) && (currentYear % 400)))) {
            daysOfMonths += leapMonths[index]
        }else{
            daysOfMonths += commonMonths[index]
        }            
    }
    return daysOfMonths;
}

/**
 * 
 * @param {*} yearOne 
 * @param {*} yearTwo 
 * @returns number
 */
const calculateDaysBetweenYears = (yearOne, yearTwo) => {
    let leapTracker = 0;
    let iterator = 0;
    let totalCommonDays;
    let totalLeapDays
    let isLeap = false;
    
    do {
        if(isLeap = !((yearOne % 4) || (!(yearOne % 100) && (yearOne % 400)))) {
            leapTracker++;
        }                    
        iterator++;
        yearOne++;
    } while (yearOne <= yearTwo);

    // console.log(leapTracker);
    // console.log(iterator-1);
    
    let totalCommonYears = (iterator - 1) - leapTracker
    totalCommonDays = totalCommonYears * 365;
    totalLeapDays = leapTracker * 366;
    return totalCommonDays + totalLeapDays;
}