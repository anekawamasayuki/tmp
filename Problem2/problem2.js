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

function solve_sub(A, B, C) {
  let ans = 0;

  // make sure a <= c
  let a = A < C ? A : C;
  let c = A < C ? C : A;
  if (a === c) {
    ans += 1;
    a--;
  }
  if (a < 1) {
    return -1;
  }

  // Make B Maximum integer
  let candidate = 0;
  if (B <= c) {
    candidate += (c + 1 - B) * 2;
  }
  if (a - (c + 1 - B) < 1) {
    candidate = Number.MAX_SAFE_INTEGER;
  }

  // Make B Minimum integer
  let candidate2 = 0;
  if (B > a) {
    candidate2 += B - (a - 1);
  }
  if (a - 1 < 1) {
    candidate2 = Number.MAX_SAFE_INTEGER;
  }

  if (candidate === Number.MAX_SAFE_INTEGER
    && candidate2 === Number.MAX_SAFE_INTEGER) {
      return -1;
    }

  ans += candidate <= candidate2 ? candidate : candidate2;

  return ans;
}

function solve(){
  var [N] = getInt(lines[0]);
  for (let i = 0; i < N; ++i) {
    var [A, B, C] = getFloat(lines[i+1]);
    console.log(solve_sub(A, B, C));
  }
}
