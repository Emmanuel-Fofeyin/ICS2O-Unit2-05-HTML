// Copyright (c) 2020 Emmanuel Fofeyin All rights reserved
//
// Created by: Emmanuel Fofeyin
// Created on:  Mond march 28 2022
// This file contains the JS functions for index.html

/**
 * This function calculates users pay and goverment intake from pay.
 */
function enterClicked() {
  // input
  const hoursWorked = parseInt(document.getElementById("hours-worked").value)
  const hourlyRate = document.getElementById("hourly-rate").value

  // output
  document.getElementById("address").innerHTML =
    "Your adress is: " + streetNumber + ", " + streetName + "."
}
