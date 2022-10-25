export const getTimeInBetweenDates = (dateOne, dateTwo) => {
    const [yOne, mOne, dOne] = dateOne.split('-')
    const [yTwo, mTwo, dTwo] = dateTwo.split('-')
    
    let yearOne = parseInt(yOne)
    let monthOne = parseInt(mOne)
    let dayOne = parseInt(dOne)

    let yearTwo = parseInt(yTwo)
    let monthTwo = parseInt(mTwo)
    let dayTwo = parseInt(dTwo)

    let dayInHours = 24
    
    // let totalYearsOne = calculateYears(yearOne)
    // let currentYearOne = 1970 + totalYearsOne;

    // let totalYearsTwo = calculateYears(yearTwo)
    // let currentYearTwo = 1970 + totalYearsTwo;

    let totalDaysInBetweenYears = calculateDaysBetweenYears(yearOne, yearTwo);
    let daysOfMonthOne = calculateMonth(yearOne, monthOne)
    console.log(daysOfMonthOne);

    let daysOfMonthTwo = calculateMonth(yearTwo, monthTwo)
    console.log(daysOfMonthTwo);

    let totalDaysOfMonth = Math.abs(daysOfMonthOne - daysOfMonthTwo);
    console.log(totalDaysOfMonth
        );
    let totalDays = Math.abs(dayOne - dayTwo)
    console.log(totalDays);

    let totalDaysOfDate = totalDaysInBetweenYears + totalDaysOfMonth + totalDays
    console.log("Difference of days between dates: "+totalDaysOfDate);
}

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

const calculateDaysBetweenYears = (yearOne, yearTwo) => {
    let leapTracker = 0;
    let iterator = 0;
    let totalCommonDays;
    let totalLeapDays
    let isLeap = false;

    // for (let index = yearOne; index <= yearTwo; index++) {
    //     if(isLeap = !((index % 4) || (!(index % 100) && (index % 400)))) {
    //         leapTracker++;
    //     }                    
    //     iterator++;
    // }
    
    do {
        if(isLeap = !((yearOne % 4) || (!(yearOne % 100) && (yearOne % 400)))) {
            leapTracker++;
        }                    
        iterator++;
        yearOne++;
    } while (yearOne <= yearTwo);
    console.log(leapTracker);
    console.log(iterator-1);
    
    let totalCommonYears = (iterator - 1) - leapTracker
    totalCommonDays = totalCommonYears * 365;
    totalLeapDays = leapTracker * 366;
    return totalCommonDays + totalLeapDays;
}

// const calculateYears = (year) => {
//     let totalYears = 0
//     for (let baseYear = 1970; baseYear < year; baseYear++) {
        
//         totalYears += 1;
//     }
//     return totalYears;
// }