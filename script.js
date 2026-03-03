console.log("Jayesh Sharma")

const hitesh = {
    name: "Hitesh",
    all: { resolve: "Permission granted for Goa trip", reject: "Permission denied for Goa trip" },
    any: { resolve: "Train tickets booked successfully", reject: "Train berth has long waiting" },
    allSettled: { resolve: "Hotel booking confirmed", reject: "Hotel booking cancelled" },
    race: { resolve: "Hitesh arrived first — Train on time", reject: "Hitesh arrived first — Train cancelled" },
};

const piyush = {
    name: "Piyush",
    all: { resolve: "Parents approved the trip", reject: "Parents denied the trip" },
    any: { resolve: "Bus tickets booked successfully", reject: "Bus sold out" },
    allSettled: { resolve: "Luggage arrived safely", reject: "My Skincare kit is missing!" },
    race: { resolve: "Piyush arrived first — Early train", reject: "Piyush arrived first — Train cancelled" },
};

const anirudh = {
    name: "Anirudh",
    all: { resolve: "Leave approved from Chaicode HQ", reject: "BiggBoss has some work at Chaicode HQ" },
    any: { resolve: "Flight tickets booked", reject: "Flights sold out" },
    allSettled: { resolve: "Journey was smooth", reject: "Train delay was uncomfortable" },
    race: { resolve: "Anirudh arrived first — Fast train", reject: "Anirudh arrived first — Train departed" },
};

const akash = {
    name: "Akash",
    all: { resolve: "Budget confirmed", reject: "Budget not approved" },
    any: { resolve: "Car rental booked", reject: "Car rental unavailable" },
    allSettled: { resolve: "Fuel contribution received", reject: "Fuel payment failed" },
    race: { resolve: "Akash arrived first — Quick route", reject: "Akash arrived first — Train delayed" },
};

const characters = {
    Hitesh: hitesh,
    Piyush: piyush,
    Anirudh: anirudh,
    Akash: akash
};


const allform = document.getElementById('all-form');
const allSubmitBtn = document.getElementById('all-form-btn');

const anyform = document.getElementById('any-form');
const anySubmitBtn = document.getElementById('any-form-btn');

const raceform = document.getElementById('race-form');
const raceSubmitBtn = document.getElementById('race-form-btn');

const allSettledform = document.getElementById('allSettled-form');
const allSettledSubmitBtn = document.getElementById('allSettled-form-btn');

allSubmitBtn.addEventListener("click", function() {
    const akashDelay = document.getElementById('all-akash-delay').value;
    const anirudhDelay = document.getElementById('all-anirudh-delay').value;
    const piyushDelay = document.getElementById('all-piyush-delay').value;
    const hiteshDelay = document.getElementById('all-hitesh-delay').value;

    const hiteshAll = allform.querySelector('input[name="all-hitesh"]:checked').value;
    const piyushAll = allform.querySelector('input[name="all-piyush"]:checked').value;
    const anirudhAll = allform.querySelector('input[name="all-anirudh"]:checked').value;
    const akashAll = allform.querySelector('input[name="all-akash"]:checked').value;

    const hiteshValue = document.getElementById('all-msgHitesh');
    const piyushValue = document.getElementById('all-msgPiyush');
    const anirudhValue = document.getElementById('all-msgAnirudh');
    const akashValue = document.getElementById('all-msgAkash');

    hiteshValue.textContent = hitesh["all"][hiteshAll];
    piyushValue.textContent = piyush["all"][piyushAll];
    anirudhValue.textContent = anirudh["all"][anirudhAll];
    akashValue.textContent = akash["all"][akashAll];

    const allStatusBox = document.getElementById('all-status')
    const allValueBox = document.getElementById('all-value')

    const method = "all";

    const promises = [
        createPromise(hitesh, hiteshAll, hiteshDelay, method),
        createPromise(piyush, piyushAll, piyushDelay, method),
        createPromise(anirudh, anirudhAll, anirudhDelay, method),
        createPromise(akash, akashAll, akashDelay, method),
    ];

    // Process Promise.all
    Promise.all(promises)
        .then((results) => {
            allStatusBox.textContent = "Resolved ✅";
            allValueBox.textContent = JSON.stringify(results);
        })
        .catch((error) => {
            allStatusBox.textContent = "Rejected ❌";
            allValueBox.textContent = error;
        });
});

anySubmitBtn.addEventListener("click", function() {
    const akashDelay = document.getElementById('any-akash-delay').value;
    const anirudhDelay = document.getElementById('any-anirudh-delay').value;
    const piyushDelay = document.getElementById('any-piyush-delay').value;
    const hiteshDelay = document.getElementById('any-hitesh-delay').value;

    const hiteshAny = anyform.querySelector('input[name="any-hitesh"]:checked').value;
    const piyushAny = anyform.querySelector('input[name="any-piyush"]:checked').value;
    const anirudhAny = anyform.querySelector('input[name="any-anirudh"]:checked').value;
    const akashAny = anyform.querySelector('input[name="any-akash"]:checked').value;

    const hiteshValue = document.getElementById('any-msgHitesh');
    const piyushValue = document.getElementById('any-msgPiyush');
    const anirudhValue = document.getElementById('any-msgAnirudh');
    const akashValue = document.getElementById('any-msgAkash');

    hiteshValue.textContent = hitesh["any"][hiteshAny];
    piyushValue.textContent = piyush["any"][piyushAny];
    anirudhValue.textContent = anirudh["any"][anirudhAny];
    akashValue.textContent = akash["any"][akashAny];

    const anyStatusBox = document.getElementById('any-status')
    const anyValueBox = document.getElementById('any-value')

    const method = "any";

    const promises = [
        createPromise(hitesh, hiteshAny, hiteshDelay, method),
        createPromise(piyush, piyushAny, piyushDelay, method),
        createPromise(anirudh, anirudhAny, anirudhDelay, method),
        createPromise(akash, akashAny, akashDelay, method),
    ];

    Promise.any(promises)
        .then((results) => {
            anyStatusBox.textContent = "Resolved ✅";
            anyValueBox.textContent = JSON.stringify(results);
        })
        .catch((error) => {
            anyStatusBox.textContent = "Rejected ❌";
            anyValueBox.textContent = error;
        });
});


raceSubmitBtn.addEventListener("click", function() {
    const akashDelay = document.getElementById('race-akash-delay').value;
    const anirudhDelay = document.getElementById('race-anirudh-delay').value;
    const piyushDelay = document.getElementById('race-piyush-delay').value;
    const hiteshDelay = document.getElementById('race-hitesh-delay').value;

    const hiteshRace = raceform.querySelector('input[name="race-hitesh"]:checked').value;
    const piyushRace = raceform.querySelector('input[name="race-piyush"]:checked').value;
    const anirudhRace = raceform.querySelector('input[name="race-anirudh"]:checked').value;
    const akashRace = raceform.querySelector('input[name="race-akash"]:checked').value;

    const hiteshValue = document.getElementById('race-msgHitesh');
    const piyushValue = document.getElementById('race-msgPiyush');
    const anirudhValue = document.getElementById('race-msgAnirudh');
    const akashValue = document.getElementById('race-msgAkash');

    hiteshValue.textContent = hitesh["race"][hiteshRace];
    piyushValue.textContent = piyush["race"][piyushRace];
    anirudhValue.textContent = anirudh["race"][anirudhRace];
    akashValue.textContent = akash["race"][akashRace];

    const raceStatusBox = document.getElementById('race-status')
    const raceValueBox = document.getElementById('race-value')

    const method = "race";

    const promises = [
        createPromise(hitesh, hiteshRace, hiteshDelay, method),
        createPromise(piyush, piyushRace, piyushDelay, method),
        createPromise(anirudh, anirudhRace, anirudhDelay, method),
        createPromise(akash, akashRace, akashDelay, method),
    ];

    // Process Promise.race
    Promise.race(promises)
        .then((results) => {
            raceStatusBox.textContent = "Resolved ✅";
            raceValueBox.textContent = JSON.stringify(results);
        })
        .catch((error) => {
            raceStatusBox.textContent = "Rejected ❌";
            raceValueBox.textContent = error;
        });
});


allSettledSubmitBtn.addEventListener("click", function() {
    const akashDelay = document.getElementById('allSettled-akash-delay').value;
    const anirudhDelay = document.getElementById('allSettled-anirudh-delay').value;
    const piyushDelay = document.getElementById('allSettled-piyush-delay').value;
    const hiteshDelay = document.getElementById('allSettled-hitesh-delay').value;

    const hiteshAllSettled = allSettledform.querySelector('input[name="allSettled-hitesh"]:checked').value;
    const piyushAllSettled = allSettledform.querySelector('input[name="allSettled-piyush"]:checked').value;
    const anirudhAllSettled = allSettledform.querySelector('input[name="allSettled-anirudh"]:checked').value;
    const akashAllSettled = allSettledform.querySelector('input[name="allSettled-akash"]:checked').value;

    const hiteshValue = document.getElementById('allSettled-msgHitesh');
    const piyushValue = document.getElementById('allSettled-msgPiyush');
    const anirudhValue = document.getElementById('allSettled-msgAnirudh');
    const akashValue = document.getElementById('allSettled-msgAkash');

    hiteshValue.textContent = hitesh["allSettled"][hiteshAllSettled];
    piyushValue.textContent = piyush["allSettled"][piyushAllSettled];
    anirudhValue.textContent = anirudh["allSettled"][anirudhAllSettled];
    akashValue.textContent = akash["allSettled"][akashAllSettled];

    const allSettledStatusBox = document.getElementById('allSettled-status')
    const allSettledValueBox = document.getElementById('allSettled-value')

    const method = "allSettled";

    const promises = [
        createPromise(hitesh, hiteshAllSettled, hiteshDelay, method),
        createPromise(piyush, piyushAllSettled, piyushDelay, method),
        createPromise(anirudh, anirudhAllSettled, anirudhDelay, method),
        createPromise(akash, akashAllSettled, akashDelay, method),
    ];

    Promise.allSettled(promises)
        .then((results) => {
            allSettledStatusBox.textContent = "Resolved ✅";
            allSettledValueBox.textContent = JSON.stringify(results);
        })
        .catch((error) => {
            allSettledStatusBox.textContent = "Rejected ❌";
            allSettledValueBox.textContent = error;
        });
});



function createPromise(characterObj, status, delay, method) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const message = characterObj[method][status];

            if (status === "resolve") {
                resolve(message);
            } else {
                reject(message);
            }
        }, delay * 1000);
    });
}