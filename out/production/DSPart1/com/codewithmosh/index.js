function reverse(input) {
    var reversed = new Array;
    for (var i = input.length - 1; i >=0; i--){
        reversed.push(input[i]);
    }
    return reversed;
}


var input = [1, 2, 'string', 'Y'];
var result = reverse(input);
console.log(result);