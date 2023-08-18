function hasTargetSum(array, target) {
  // Write your algorithm here
  const sums = [];
  const elementMap = new Map();
  // check each element in array
  for (let i = 0; i < array.length; i++) {

    // calculate target - current element
    let sumMinusElement = target - array[i];

    // check if this number exists in element map
    // if so then we found a pair of numbers that sum to target
    if (elementMap.has(sumMinusElement.toString())) {
      sums.push([array[i], sumMinusElement]);
      //return true;
    }

    // add the current number to the element map
    elementMap.set(array[i].toString(), array[i])
    
  }

  // return all pairs of integers that sum to S
  if(sums.length > 0){
    return true;
  }else{return false;}
  

};

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  - iterate thru the array and add each and if the sum equals the target return true
  if iterating thru the array doesn't equal the targer return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
