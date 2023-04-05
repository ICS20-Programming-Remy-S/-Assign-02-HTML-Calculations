// Copyright (c) 2023 Skelton All rights reserved
//
// Created by: Remy Skelton
// Created on: Mar 2023
// This file contains the JS functions for index.html

function enterClicked () {

  
  
  // User data input
  let aEdge = parseFloat(document.getElementById("a-edge").value)

  
  
  //prosses
  let surfaceArea = Math.sqrt(3) * Math.pow(aEdge,2);
  
  let volume = Math.pow(aEdge,3) / (6 * Math.sqrt(2));

  
  
  // Data given back to user
  document.getElementById('surfaceArea').innerHTML = 'The surface area of your tetrahedron is ' + surfaceArea.toFixed(2) + 'cm²'
  document.getElementById('volume').innerHTML = 'The volume of your tetrahedron is ' + volume.toFixed(2) + 'cm<sup>3</sup>'
}
