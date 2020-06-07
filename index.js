import { fifaData } from './fifa.js';
// console.log(fifaData);

// console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

const fifaWorldCup = fifaData.filter(match => match.Year === 2014 && match.Stage === 'Final') [0];

// console.log (fifaWorldCup['Home Team Name']);
// console.log (fifaWorldCup['Away Team Name']);
// console.log (fifaWorldCup['Home Team Goals']);
// console.log (fifaWorldCup['Away Team Goals']);
// console.log (fifaWorldCup['Win conditions']);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
    return data.filter(same => same.Stage === 'Final')
};

//console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(data) {
    const years = getFinals(data).map(year => year.Year);
    return years;

};

// console.log(getYears(fifaData));


// const getYears = fifaData.map((years) => {
//     return years.Year;
// });


// console.log (Array.from(new Set(fifaData.map(e=>e.Year))));

// const getYears = ((years) => {
//     return getFinals(years).map(year => year.Year);
// });


// console.log (getYears(fifaData));


/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback) {

    const winner = callback(fifaData).map(getWinner => 
        {
            if (getWinner['Home Team Goals'] > getWinner['Away Team Goals']) {
                return getWinner['Home Team Name'];
            }
            else {
                return getWinner['Away Team Name']
            }
        });
        return winner;

};

 //console.log(getWinners(getFinals));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(cbGetFinals, cbGetYears) {
    
    const whoWon = cbGetFinals.map((countryName, index) => {
        return "In " + cbGetYears[index] + ", " + countryName + " won the world cup!"
    });
    return whoWon;
};

// console.log(getWinnersByYear(getWinners(getFinals), getYears(getFinals(fifaData))));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

    const averageHome = data.map(i => i["Home Team Goals"]).reduce((accumulated, currentValue) => accumulated + currentValue, 0)/data.length;
    const averageAway = data.map(i => i["Away Team Goals"]).reduce((accumulated, currentValue) => accumulated + currentValue, 0)/data.length;

    return (
        {
            "average home team goals": averageHome,

            "average away team goals": averageAway
        }
    );

};

//console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {
   
    let numGames = getFinals(data).reduce((accumulated, currentValue) => {
        if (wcWins === teamInitials) {
            accumulated++;
        }
        return accumulated;
    }, 0);
    return `${teamInitials} has won the world cup ${wcWins} times.`
};

console.log(getCountryWins(fifaData, "FRA"));


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
