const accountId = 144553;
let accountEmail = "person@mailbox.com";
var accountPassword = "12345";
accountCity = "Solapur";

console.table([accountId,accountEmail,accountPassword,accountCity]);

// accountId = 2;
accountEmail = "new@mailbox.com";
accountPassword = "a1b2c3";
accountCity = "Pune";
console.log("After modifications...");
console.table([accountId,accountEmail,accountPassword,accountCity]);

let bigNo = 987654321987654321n;
console.log(typeof bigNo);
console.log(bigNo + 1n);
