// Write your helper functions here!

require("cross-fetch/polyfill");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  let missionTarget = document.getElementById("missionTarget");
  missionTarget.innerHTML = `
   <h2>Mission Destination</h2>
   <ol>
   <li>Name: ${name}</li>
   <li>Diameter: ${diameter}</li>
   <li>Star: ${star}</li>
   <li>Distance from Earth: ${distance}</li>
   <li>Number of Moons: ${moons}</li>
   </ol>
   <img src= ${imageUrl}>`;
}

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(testInput)) {
    return "Not a Number";
  } else {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  if (
    validateInput(pilot) === "Empty" ||
    validateInput(copilot) === "Empty" ||
    validateInput(fuelLevel) === "Empty" ||
    validateInput(cargoLevel) === "Empty"
  ) {
    alert("All fields are required");
  } else if (
    validateInput(pilot) === "Is a Number" ||
    validateInput(copilot) === "Is a Number"
  ) {
    alert("Please enter a name for pilot and copliot");
  } else if (
    validateInput(fuelLevel) === "Not a Number" ||
    validateInput(cargoLevel) === "Not a Number"
  ) {
    alert("Please enter a number for mass of cargo and volume of fuel");
  } else {
    //declare status
    let launchStatus = document.getElementById("launchStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    //update pilot and copilot status
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    // set launch status
    let readyToGo = true;

    // check fuel level and update fuel status
    if (fuelLevel >= 10000) {
      fuelStatus.innerHTML = `Fuel level high enough for launch`;
    } else {
      fuelStatus.innerHTML = `Fuel level too low for launch`;
      readyToGo = false;
    }
    // check cargo mass and update cargo status
    if (cargoLevel < 10000) {
      cargoStatus.innerHTML = `Cargo mass low enough for launch`;
    } else {
      cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
      readyToGo = false;
    }
    // check launch status color and update launch status
    if (readyToGo === true) {
      launchStatus.innerHTML = `Shuttle is Ready for Launch`;
      launchStatus.style.color = "green";
    } else {
      launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
      launchStatus.style.color = "red";
    }
    // list updated and  list visible
    list.style.visibility = "visible";
  }
}

async function myFetch() {
  let planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });
  return planetsReturned;
}

function pickPlanet(planets) {
  let randomIndex = Math.floor(Math.random() * planets.length);
  return planets[randomIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
