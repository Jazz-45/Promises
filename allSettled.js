const hitesh = Promise.resolve("Hotel booking confirmed");
const piyush = Promise.reject("Luggage delayed");
const anirudh = Promise.resolve("Journey smooth");
const akash = Promise.reject("Fuel payment failed");

Promise.allSettled([hitesh,piyush,anirudh,akash])
  .then(results => {
  console.log("Status Report After Reaching Goa:");
  console.log(results);
});