function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid); 
    const right = array.slice(mid);
  
    const sortedLeft = mergeSort(left); 
    const sortedRight = mergeSort(right); 
  
    return merge(sortedLeft, sortedRight);
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
 
    while (leftIndex < left.length) {
      result.push(left[leftIndex]);
      leftIndex++;
    }
    while (rightIndex < right.length) {
      result.push(right[rightIndex]);
      rightIndex++;
    }
    return result;
  }
  

  const array = [38, 27, 43, 3, 9, 82, 10];
  const sortedArray = mergeSort(array);
  console.log("Sorted array:", sortedArray);
  