const bus = Promise.reject("Bus sold out");
const flight = Promise.reject("Flight sold out");
const train = Promise.resolve("Train tickets booked");
const car = Promise.reject("Car rental unavailable");

Promise.any([train, bus, flight, car])
  .then(result => console.log("Transport confirmed:", result))
  .catch(error => console.log("All options failed:", error));

Promise.any([bus, flight, car])
  .then(result => console.log("Transport confirmed:", result))
  .catch(error => console.log("All options failed:", error));