// 1. Split array in half
// 2. Sort numbers from the array
// 3. Merge both into new array

const mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  const mid = Math.round(arr.length / 2);
  const leftHalf = arr.slice(0, mid);
  const rightHalf = arr.slice(mid, arr.length);
  return merge(mergeSort(leftHalf), mergeSort(rightHalf));
};

const merge = (leftHalf, rightHalf) => {
  const mergedArray = [];

  while (leftHalf.length && rightHalf.length) {
    if (leftHalf[0] < rightHalf[0]) {
      mergedArray.push(leftHalf.shift());
    } else {
      mergedArray.push(rightHalf.shift());
    }
  }
  return [...mergedArray, ...leftHalf, ...rightHalf];
};

console.log(mergeSort([2, 1, 6, 4, 3, 7, 5, 8]));
