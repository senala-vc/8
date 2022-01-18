let arr = [1, 2, 3, 4];
let sum = 0;

for (let i = 3; i < arr.length; i++) {
	if (i % 2 != 0)
    sum += arr[i];
}

console.log(sum);
