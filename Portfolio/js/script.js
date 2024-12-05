function removeDuplicates(arr) {
	let biggestNum = null;
	let secondBiggestNum = null;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > biggestNum) {
			secondBiggestNum = biggestNum;
			biggestNum = arr[i];
		} else if (arr[i] > secondBiggestNum && arr[i] !== biggestNum) {
			secondBiggestNum = arr[i];
		}
	}
	return secondBiggestNum;
}
console.log(removeDuplicates([7, 15, 8, 15, 7, 2]));
