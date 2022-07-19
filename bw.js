const coinkey = require("coinkey");
const sha256 = require("sha256");
const bw = "SAMPLE TEXT"; // <-- EDIT "YOUR BRAIN STRING WALLET"
const pin = "1234"; // <-- EDIT PIN

function get_salt_num(str, p) {
  var m = 0;

  for (var x = 0; x < str.length; x++) {
    if (p.indexOf(str[x]) !== -1) {
      m += 1;
    }
  }

  return m;
}

var j = bw.length * bw.length * bw.length;
var h = bw;

while (j) {
  h = sha256(h);
  var k = get_salt_num(h, pin);

  while (k) {
    h = sha256(h);
    k--;
  }
  j--;
}

const ck = new coinkey(new Buffer.from(h, "hex"));
console.log("----------------------------------------------------------------------------------------------");
console.log(`YOUR BRAIN STRING WALLET: ${bw}`);
console.log(`YOUR BRAIN PIN: ${pin}`);
console.log(`Address (Legacy, compressed): ${ck.publicAddress}`);
console.log(`WIF Private Key (Wallet Import Format): ${ck.privateWif}`);
console.log(`Private Key (Hex, SHA256): ${ck.privateKey.toString("hex")}`);
console.log("----------------------------------------------------------------------------------------------");
