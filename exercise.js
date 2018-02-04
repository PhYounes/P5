function sorted (arr) {
  for (var i = 0; i < arr.length; i++) {
    arr.sort(function (a, b) {
      return b - a;
    })
  }
  return arr;;
}
  console.log(sorted ([-4, 1 , 9, -3, 2, -1 ,3, -6, -10]));

  var arr = [-4, 1 , 9, -3, 2, -1 ,3, -6, -10].sort (function (x, y) {
    return x - y;
  })
  console.log(arr);



function sort (arr) {
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr [i] >= max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(sort ([-4, 1 , 29, -3, 2, -1 ,3, -6, -10]));







function largestOfFour (arr) {
  var maxes = [];

  for (var i = 0; i < arr.length; i++) {
    //console.log(arr [i]);
    var tempMax = arr [i][0];
    for (var j = 0; j < arr[i].length; j++) {
      var  currentMax = arr [i][j];
      if (currentMax >= tempMax) {
        tempMax = currentMax;;
      }
    }
    maxes.push (tempMax);
  }
  return maxes;
}
console.log(largestOfFour ([[4, 5, 1, 3], [-13,-27,-18, -26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));




function findMax (arr) {
  var max = arr [0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
      max = arr[i]
    }
  }
  return max ;
}
console.log(findMax ([-9,-5, -3,-3, -19, -1]));




// function largestOfFour (arr) {
//   var maxes = [];
//   for (var i = 0; i < arr.length; i++) {
//     var innerMax = findMax (arr[i]);
//     maxes. push (innerMax);
//   }
//   return  maxes;
// }
// console.log(largestOfFour ([[4, 5, 1, 3], [13,27,18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//console.log(largestOfFour ([[4, 5, 1, 3], [13,27,18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
