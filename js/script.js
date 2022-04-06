// Copyright (c) 2020 Emmanuel Fofeyin All rights reserved
//
// Created by: Emmanuel Fofeyin
// Created on:  Mond march 28 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates users pay and government intake from pay.
 */
function calculate() {
  // input
  const TAX_RATE = 0.18;
  const hoursWorked = parseFloat(document.getElementById("hours-worked").value)
  const hourlyRate = document.getElementById("hourly-rate").value

   // process
  const pay = (hoursWorked * hourlyRate) * (1.00 - TAX_RATE) 
  const taxes = (hoursWorked * hourlyRate) *  TAX_RATE  

    
  // output
   document.getElementById('pay').innerHTML = 'Your pay will be: $' + (pay)
   document.getElementById('taxes').innerHTML = 'The government will take: $' + (taxes)
   document.getElementById('taxes').innerHTML = 'The government will take: $' + taxes.toFixed(2)
   document.getElementById('pay').innerHTML = 'The pay is: $' + pay.toFixed(2)
}
