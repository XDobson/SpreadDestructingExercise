/*
 4d.
 Create another const variable called "moreAvengers" and set the value to an object with the following key value pairs (key: "blackWidow" value: "Natasha Romanoff"), (key: "hawkeye" value: "Clint Barton"), & (key: "ironMan" value: "Tony Stark").

 4e.
 Using destructuring again, create brand new variable names for the values in the moreAvengers object. For the "Natasha Romanoff" string value use "nat" for the variable name and for the REST of the key value pairs use "others" for the variable name.

 4f.
 Using a single console log, display the values of the two new variables in terminal
*/

const mcuShows = ["Loki","Moon Kight"]
const starWarsShows = ["The Mandalorian", "The Book of Boba Fett"]
const disneyPlusShows = [...mcuShows, ...starWarsShows, "The Beatles"]
console.log(disneyPlusShows);

const netflixMovies = {action: "Extraction", crime: "The Irish Man"}
const amazonPrimeMovies = {action: "The Tomorrow War", drama: "One Night in Miami"}
const streamingMovies = {...amazonPrimeMovies, ...netflixMovies, musical: "Hamilton" }
console.log(streamingMovies);

const disneyJunior = ["Mickey Clubhouse", "Spidey and his Amazing Friends"]
const mickey = disneyJunior[0]
const spidey = disneyJunior[1]
console.log(mickey, spidey);

const avengers = {warMachine:"James Rhodes", theHulk: "Bruce Banner"}
const {warMachine, theHulk} = avengers
console.log(warMachine, theHulk);
const moreAvengers = {blackWidow: "Natasha Romanoff", hawkeye: "Clint Barton", ironMan:"Tony Stark"}
const {blackWidow: nat, ...others} = moreAvengers
console.log(nat,others);