// Write a function:
// function binaryGap(N);
//
// that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.
//
// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5.

var binaryGap = function(n){
  var current = 0;
  var longest = 0;

  Number(+n).toString(2).split('').forEach(function(char){
    if(char==='0'){
      current++
    }else{
      longest = Math.max(current, longest);
      current = 0;
    }
  });
  return longest;
};
