function reverseArray(arr) {
    let reverseArr = [];
    while (arr.length) {
      reverseArr.push(arr.pop());
    }
  
    return reverseArr;
  }
  
  console.log(reverseArray(['A','B','C']));