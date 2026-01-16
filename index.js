// ======= Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Enter numbers: ", (numInput) => {
//   const nums = numInput.split(" ").map(Number);

//   rl.question("Enter target: ", (targetInput) => {
//     const target = Number(targetInput);

//     for (let i = 0; i < nums.length; i++) {
//       for (let j = i + 1; j < nums.length; j++) {
//         if (nums[i] + nums[j] === target) {
//           console.log(`Indices: [${i}, ${j}]`);
//           console.log(`Values: ${nums[i]} + ${nums[j]} = ${target}`);
//           rl.close();
//           return;
//         }
//       }
//     }

//     console.log("No solution found");
//     rl.close();
//   });
// });

// Python code
// nums = list(map(int, input("Enter numbers: ").split()))
// target = int(input("Enter target: "))

// for i in range(len(nums)):
//     for j in range(i + 1, len(nums)):
//         if nums[i] + nums[j] == target:
//             print(f"Indices: [{i}, {j}]")
//             print(f"Values: {nums[i]} + {nums[j]} = {target}")
//             exit()

// print("No solution found")

// =====Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const twoSum = function (nums, target) {
  let i = 0;
  let j = nums.length - 1;
  let sum = 0;
  while (i < j) {
    sum = nums[i] + nums[j];

    if (sum === target) {
      return [i + 1, j + 1];
    } else if (sum < target) {
      i++;
    } else {
      j--;
    }
  }
  return null;
};

rl.question("Enter Numbers : ", (numInput) => {
  const nums = numInput.split(" ").map(Number);
  rl.question("Enter Target : ", (targetInput) => {
    const target = Number(targetInput);
    const result = twoSum(nums, target);
    if (result) {
      console.log(`Indices: ${result}`);
      console.log(
        `Values: ${nums[result[0] - 1]} + ${
          nums[result[1] - 1]
        } = ${target}`
      );
    } else {
      console.log("No solution found");
    }
    rl.close();
  });
});
