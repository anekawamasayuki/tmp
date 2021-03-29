process.stdin.resume();
process.stdin.setEncoding('utf8');

var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin, output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line.split(" "));
});
reader.on('close', solve);

function getInt(strArr){
  var rtn = [];
  for(elem of strArr)rtn.push(parseInt(elem));
  return rtn;
}

function getFloat(strArr){
  var rtn = [];
  for(elem of strArr)rtn.push(parseFloat(elem));
  return rtn;
}

function solve(){
  var [n,N] = getInt(lines[0]);
  var A = getFloat(lines[1]).sort();
  let ans = N >= A[0] && N <= A[A.length-1];

  console.log(ans ? "Yes" : "No");
}
