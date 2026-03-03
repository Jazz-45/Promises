const hitesh = Promise.resolve("Permission granted by partner");
const piyush = Promise.resolve("Parents approved");
const anirudh = Promise.resolve("Leave approved from Chaicode HQ");
const akash = Promise.resolve("Budget confirmed");
const jayesh_ME = Promise.reject("I have to attend Cohort's Sunday Class");

const fantasticFour=[hitesh, piyush, anirudh, akash]
const fantasticFive=[hitesh,piyush,anirudh,akash,jayesh_ME]

Promise.all(fantasticFour)
  .then(results => {
    console.log("Goa Trip Confirmed!");
    console.log(results);
  })

Promise.all(fantasticFive)
  .catch(results => {
    console.log("Goa Trip Cancelled!");
    console.log(results);
  })