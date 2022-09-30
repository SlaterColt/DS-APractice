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

// var input = [1, 7, 3, 6, 5, 6];
// var result = pivotIndex(input);
// console.log(result);

var isIsomorphic = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }

    const map = new Map();

    const set = new Set();

    for (let i = 0; i< s.length; i++) {
        charS = s.charAt(i);
        charT = t.charAt(i);

        if (map.has(charS) == true) {
            if (map.get(charS) !== charT) {
                return false;
            }
        }

        else {
            if (set.has(charT)) {
                return false;
            }
        }

        map.set(charS, charT);
        set.add(charT);
    }
    
    return true;
};

//  var s = "titee";
//  var t = "paper";
//  var isTrue = isIsomorphic(s, t);
//  console.log(isTrue);

const isSubsequence = (s, t) => {
    if (s.length > t.length) return false;

    var t_length = t.length;
    var subsequence = 0;
    for (let i = 0; i < t_length; i++) {
        if (s[subsequence] === t[i]) {
            subsequence++;
        }
    }
    return subsequence === s.length;
}

// var s = "icepro";
// var t = "practiceproblem";
// var isTrue = isSubsequence(s, t);
// console.log(isTrue);


// time complexity: O(N^2) -> O(N)
// Space Complexity: O(1) - Constant -> O(N)

// Can rewrite in a HashMap

var twoSumLoop = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] === target) {
                return [i, j];
            } 
        }
    }
}

var twoSumMap = function (nums, target) {
    var map = {};
    for (let i = 0; i < nums.length; i++) {
        var value = nums[i];
        var complementPair = target - value;
        if(map[complementPair] !== undefined) {
            return [map[complementPair], i];
        } else {
            map[value] = i;
        }
    }
}

var nums = [2, 7, 11, 15];
var target = 9;
var result = twoSumMap(nums, target);
console.log(result);