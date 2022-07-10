const coinkey = require("coinkey");
var j = 10;
console.log("----------------------------------------------------------------------------------------------");
while (j) {
  var ck = new coinkey.createRandom();
  console.log(`Address (Legacy, compressed): ${ck.publicAddress}`);
  console.log(`WIF Private Key (Wallet Import Format): ${ck.privateWif}`);
  console.log(`Private Key (Hex, SHA256): ${ck.privateKey.toString("hex")}`);
  console.log("----------------------------------------------------------------------------------------------");
  j--;
}
