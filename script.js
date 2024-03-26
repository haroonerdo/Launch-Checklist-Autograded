// Write your JavaScript code here!

//const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function () {
  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      //console.log(listedPlanets); //why it is here?
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      
      let planet = pickPlanet(listedPlanets);
      addDestinationInfo(
        document,
        planet.name,
        planet.diameter,
        planet.star,
        planet.distance,
        planet.moons,
        planet.image
      );
      console.log(planet); // only I want to see in the console
    });

  //add an event listener for submit button
  //formSubmission
  let form = document.querySelector('form');
  
  form.addEventListener("submit", function(event) {

      event.preventDefault();
      let list = document.querySelector('#faultyItems');
      let pilot = document.querySelector("input[name=pilotName]").value; 
      let copilot = document.querySelector("input[name=copilotName]").value; 
      let fuelLevel = document.querySelector("input[name=fuelLevel]").value; 
      let cargoLevel = document.querySelector("input[name=cargoMass]").value;
      
      formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
  });        
 
});


