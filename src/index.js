
exports.min = function min (array) {
  if (array == undefined) {
    return 0;
  }
  if (!array.length) {
     return 0;
   }



  var minScore = array[0];
    for (var i = 1; i < array.length; i++){
    if (array[i] < minScore){
          minScore = array[i];
    }} return minScore;

}

exports.max = function max (array) {
  if (array == undefined) {
    return 0;
  }
  if (!array.length) {
     return 0;
   }

var maxScore = 0;
for (var i = 0; i < array.length; i++){
if (array[i] > maxScore){
      maxScore = array[i];
}} return maxScore;

}

exports.avg = function avg (array) {
  if (array == undefined) {
    return 0;
  }
  if (!array.length) {
     return 0;
   }

  var sumNum = array.reduce(function(sum, current){
      return sum + current;
  }, 0);
      var avgNum = sumNum/(array.length);
      return avgNum;

}
