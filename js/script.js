// Copyright (c) 2020 Emmanuel Fofeyin All rights reserved
//
// Created by: Emmanuel Fofeyin
// Created on:  Mond march 28 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates users pay and goverment intake from pay.
 */
function calculate() {
  // input
  const hoursWorked = parseInt(document.getElementById("hours-worked").value)
  const hourlyRate = document.getElementById("hourly-rate").value

   // process
  const pay = (hoursWorked * hourlyRate) * (1.00 - 0.18) 
  const taxes = (hoursWorked * hourlyRate) *  0.18  

    
  // output
   document.getElementById('pay').innerHTML = 'Your pay will be: $' + (pay)
   document.getElementById('taxes').innerHTML = 'The government will take: $' + (taxes)
}
