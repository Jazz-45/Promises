const hiteshArrival = new Promise((resolve,reject) =>
  setTimeout(() => resolve("Hitesh reached first — Train on time"), 2000)
);

const piyushArrival = new Promise((resolve, reject) =>
  setTimeout(() => reject("Piyush reached first — Train cancelled"), 1000)
);

const akashArrival = new Promise((resolve, reject) =>
  setTimeout(() => reject("Akash reached first — Train cancelled"), 4000)
);

const anirudhArrival = new Promise((resolve, reject) =>
  setTimeout(() => resolve("Anirudh reached first — Train on time"), 3000)
);



Promise.race([hiteshArrival, piyushArrival])
  .then(result => console.log("Outcome:", result))
  .catch(error => console.log("Outcome:", error));

Promise.race([akashArrival, anirudhArrival])
  .then(result => console.log("Outcome:", result))
  .catch(error => console.log("Outcome:", error));