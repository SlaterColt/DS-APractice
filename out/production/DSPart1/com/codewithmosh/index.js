function reverse(input) {
    var reversed = new Array;
    for (var i = input.length - 1; i >=0; i--){
        reversed.push(input[i]);
    }
    return reversed;
}

//@Test
//var input = [1, 2, 'string', 'Y'];
//var result = reverse(input);
//console.log(result);

var runningSum = function(nums) {
    var sum = 0;
    var runningSum = new Array;

    for (var i = 0; i < nums.length; i++){
        sum += nums[i];
        runningSum[i] = sum;
    }

    return runningSum;
};

//var input = [1, 2, 3, 4, 5];
//var result = runningSum(input);
//console.log(result);

var pivotIndex = function(nums) {
    if (nums.length == 0) return -1;

    var n = nums.length;
    var totalSum = 0, leftSum = 0;

    for (var i of nums)
        totalSum += i;

    for (var i = 0; i < n; i++) {
        if (leftSum == (totalSum - nums[i]))
            return i;
        else {
            leftSum += nums[i];
            totalSum -= nums[i];
        }
    }

    return -1;
};

// var pivotIndex = function(nums) {
//     var sum = 0, leftSum = 0;
//     for (var i of nums) sum += i;
//     for (var i = 0; i < nums.length; ++i) {
//         if (leftSum == sum - leftSum - nums[i]) return i;
//         leftSum += nums[i];
//     }

//     return -1;
// };

var input = [1, 7, 3, 6, 5, 6];
var result = pivotIndex(input);
console.log(result);